const process = require('process')
const fetch = require('node-fetch')
const storagePackage = require('@google-cloud/storage')

const { Storage } = storagePackage;
const { EVENTBRITE_TOKEN } = process.env

const creds = {
  "type": "service_account",
  "project_id": "spring-gift-336003",
  "private_key_id": "1bda4a8dfe72ef225570fa2b3edca88564c4f4a4",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDF5nyqIoaD+rF1\nCqSzRfdrRXMkdgTc+PRc17LhWTePt10omkbFJa0g0O8xrBymR8iyl55J+AAn7m2h\nghvdtcTa7GtYSaWPzFnXO+Aa6f2ToU251JHB/+Mmg39FhAi3bsFvCJkm5LaIXPZc\nCpufOJLEGM6xOzZTzz/HWr+3oMJmaj2LbNxibVhmiIBs+A2/DGJplEp7CGj5MEpS\nbKVVLY+pgu+UY/+tGPyj4KpLexXTwhNh/UdIungzErGF/OfQ18E+19x6XLkhBMLC\nb1rFpmJPGgpmI7+ycrcNJOEbDa1hHERpJEPFzEq+wBb1QMp0euRZB4p4WtIe9p5o\nK1S0nJvXAgMBAAECggEAB/FRUimMX4vcunDtnYC/ea+YYiXwc22OFS0J2C+5LwxY\nPoYINOc0Gx73mQ7dn+WkQVkcRVi6qaxqlWXzUcMqJIucXupzYCGYZRVZab5Ravu5\nP5RiyZ5h0szKFPndhbGTk63zKgbAHE0q2a49T7cfQNddpR3v9ye+v6gKc/rAqQgk\np+fuoJOBsKWN8MXG8SwYa3MJItyV3UnI8GTtNs4cGj097VXBqoXD0Sz0nivbHaQ5\ng8S65QYGtM2B/WmBisQDdw+j3tAbYrYJXIPIFrlbQL0hRpIHal9+uyRpsRwoIuRO\nE7llSwkrS31LBPlO8YuAWMUu9uL54/ZwJ3SL8Dy6TQKBgQDs2xzoaEZ9AoNZJbvZ\nlFHock140/w28q1XOfhd+eZ2YrQbn/TBXZc+vS+becVDuqWoQr4jKnOFeHOBc+Jx\nK5KHSt71lw/yLP99XjxtCEzbxsHoq9hzftz1kZC1hjc+UtmKERDN8XBFwWM9y1Sm\nrSO/5st774OBfD62KnlfZF6V+wKBgQDV5VPhvzeA1QrAQTL8Rto0tpPpzzZnWoeF\ndVZFnH6TFjBI+UN5py+aetOSHu6pPYbmFgaADGVmIwr8+09JlfcUTK+DmWHMzQJ4\ngLEzZXB1RGbYooa/HZuB56gPhQvhp2QzqOE6XAcUNzmV8+cvIa9Z1UCgtpwzWxUs\nn7GlvX7W1QKBgC/K5sJeiBqhby+F1anJq91jcw52d+X+gcuf/uW3jzFEKWOJmzGJ\nWQNn2TteDtfjyZlyHjuqTTUZYPU2FPMQ/7gc+3BC0wzi14rMgRTfH+MY7/eq9ToY\n1y0V+kUml+8TeKHLX8CufyEULJpDdQlM1nHaeCTB558xGtZXK7Z74joRAoGBAJLd\ndr4PdIXCQjKF0gNEhvkgz+j/fURz9Y+eZJFBhetqldbVSA5UzCvO4Ex5brfH5kM/\nplDvsgPyVc4kpGlLTi6jBPRgMbXUojipbIJ0yUXLpK5k0g6Rvr/wlwWo/eJ/9B5A\ne/19SOMJlEGxCfDjuSn+cfSnzhK5HI3aTLkXpurNAoGBAJ9QaS+UNNaVOM/h8TwX\nzzREhbiuTaz+eMwYzwtX1GY1SDpyYJbN8GLPLia7C1lpfTj4lkVhTpuPwjb4D0N/\nOS3yZR6ohkqn2aMWRhGjTGcdeMnAN9dlsmTkFrEKJoFxyUweEHu1MJO4JSlxVgqJ\nzS0pA+93iY4viO/ARAoxXcGf\n-----END PRIVATE KEY-----\n",
  "client_email": "results@spring-gift-336003.iam.gserviceaccount.com",
  "client_id": "110869427993518144962",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/results%40spring-gift-336003.iam.gserviceaccount.com"
}

const handler = async function (event) {
  try {
    const response = await fetch('https://live.rawmotion.com/api/v1/event/4197b641-63ee-11eb-8590-0fa6623371ce/contests')

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }

    // console.log(response.text());
    const data = await response.json()

    // setup storage
    const storage = new Storage({
      credentials: creds
    });
    const myBucket = storage.bucket('nst_media');
    const file = myBucket.file('results-test.json');

    // save
    file.save(JSON.stringify(data)).then(() => file.makePublic());

    return {
      statusCode: 200,      
      body: JSON.stringify(data)
    }

  } catch (error) {
    // output to netlify function log
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
