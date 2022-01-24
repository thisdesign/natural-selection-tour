const process = require('process')
const fetch = require('node-fetch')
const storagePackage = require('@google-cloud/storage')

const { Storage } = storagePackage;
const { EVENTBRITE_TOKEN } = process.env
const { GOOGLE_KEY } = process.env

const creds = {
  "type": "service_account",
  "projectId": "spring-gift-336003",
  "private_key_id": "c9647f756ac86e1a069adf6d8d7f82a95dd48ce2",    
  "private_key" : "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD0lmK+57lOkP4x\nUnQtQZ/pxD1wu6Issmg/RFtjgK71ylwnWiaFboDoD8DCcnDfrfBUaBbvutanrudl\nHB8D+q01SqEwwLkTuB2gTFMlEWD+RE9wXl1dik8Z07eaRF170I1zmDP4dApc/eFp\n12D1N4VLzynrg6BGxkjSNa9IrrnK1xToQUvplbLj6Ng37o0Bca4+1mmwurZSo/XB\npLUC8hha49ZsO6uwpHlcaNW/q2zuswz70OzDTMzRaED7aa6d78AUMfHlXVxBjaXj\ntw0hHRSqzTNNVNBIZ+7W18hmN+0kGPRdvkN6SyvrUNCEPBG7iwy4LN5ri17EV1Yw\noHCdBW79AgMBAAECggEAbtYZYF583GwbLLmrOPj0oQgTOZtltfCRCh6NdW1Sm8J8\neT7ClxPI6aB93v/iQ5K8hlt3DWLzNCCv7mNMcM6voCc2HXQwSo3UKxh7UyBpfj/x\nab/xelqbVt5Y5NkXLe0HtLrjzjKzoYlRFVgLMYRb7MsvuXC3+GqRhGTcjkjTm+Vx\n449kSsAASx+KOEem6m86nZkUl8V7VhRfYDa7CNzPiYOfTWwGBybA7gpPfqhRFmj7\nzWnf1oggIijEdWnRThirdYeJMhCzRxoeyypOCxpS0ud38JVoqhUtGgnMBstxpMBl\nC9FrXlXZdygDKHRChFFsKnym+Yi/agAXJaOznFE89wKBgQD6SkenZ4RqBwNlBmxu\nzdF45VFx1/Bj0fNyriQs4goLZ6AOqnLDnGavcPEPEuKSSEt2AabuqJSfmHO48iu7\nZ0M++ugNnlQXe4Y1JZM5OxptVwObxy4ZeGYEnH9Jme+F9MBz72XGBsCSnuhh637g\nMW1w3yLFR4OMHSt3P5jI+v8C/wKBgQD6Ks0pGnuynIy4wypLzO9X8oj2PHZasghd\n+IZlPz7pF7wFkgKYmftjcouBwjPXzbCEYoQLDoJziHdzTJmujDSlxDJbdeZIFL0k\nOr630vUDXorr+kj1hvNKItcEwXgmSsuwDNmQU60C7W3WnTEkEfVMMztQcMWtknUi\njfZDCsWaAwKBgDbJz8mbZWb4Rgv1TgMrVrFKMXvkMyEGsm3mJNEWYfCBLI5JTXn4\nYJoC9SHBlotC/BHG5s3TZUVST/KqQFxzjErbDbT9dZb2WTiFEycyAuTwaT/OaA73\nRg24XDy2T7JZE0/Nlc+1Zq4xztiwfkOBTl2o2qmor+kZ8YvXBhDosK3tAoGADfx2\nm+WvJL074NiIdNRwTSpyHdIji86ISTiryt1OVxnMmUMgggeZ1mWBBzAkVdxaEgyv\n9S5KfMsUYo3Vybxs9ReS+SoORdli+bOPFhflOtr+SVMk4RU6ZNqtysZGQV3NJXqS\nb08+TPuZOHZxWOLoI+p5VnX3l0yo39Wv/u+LPKECgYAU0DRbiC0E2W5wTQ7GrpKb\nlqKSc1NFcx0Di7sV8n5ulxftKiOzO93C3RJdzKVVonj7bGCY2TI6Um3ZxdP2ranE\nmtO1a5U/WN0Csy7c3VLNkc7/smTxyIkp7U9qD3JTrLSa4DNYDxJWGY5Pdg94kWSV\nK8z67m/Xkep42bgSX3lQjQ==\n-----END PRIVATE KEY-----\n",
  "client_email": "results@spring-gift-336003.iam.gserviceaccount.com",
  "client_id": "110869427993518144962",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/results%40spring-gift-336003.iam.gserviceaccount.com"
}

// creds.private_key = GOOGLE_KEY.split("\\n").join("\n")

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

    await file.save(JSON.stringify(data)).then(() => file.setMetadata({cacheControl: 'public, max-age=60'}));
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
