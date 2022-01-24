const process = require('process')
const fetch = require('node-fetch')
const storagePackage = require('@google-cloud/storage')

const { Storage } = storagePackage;
const { EVENTBRITE_TOKEN } = process.env
const { GOOGLE_KEY } = process.env

let creds = {
  "type": "service_account",
  "project_id": "spring-gift-336003",
  "private_key_id": "c9647f756ac86e1a069adf6d8d7f82a95dd48ce2",    
  "client_email": "results@spring-gift-336003.iam.gserviceaccount.com",
  "client_id": "110869427993518144962",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/results%40spring-gift-336003.iam.gserviceaccount.com"
}
  
creds.private_key = GOOGLE_KEY

const handler = async function (event) {
  try {
    const response = await fetch('https://live.rawmotion.com/api/v1/event/e7947511-7bc6-11ec-9e31-9f89d1715064/contests')

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
    const file = myBucket.file('results-two.json');

    // save
    // file.save(JSON.stringify(data)).then(() => file.makePublic());

    file.save(JSON.stringify(data)).then(() => file.setMetadata({cacheControl: 'public, max-age=60'}));
    // file.setMetadata({cacheControl: 'public, max-age=60'});

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
