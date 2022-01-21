const process = require('process')
const fetch = require('node-fetch')
const storagePackage = require('@google-cloud/storage')

const { Storage } = storagePackage;
const { EVENTBRITE_TOKEN } = process.env

const creds = {
    "type": "service_account",
    "project_id": "internal-236323",
    "private_key_id": "dfe858e385e43ad4b5d79af898153fe6b8c7a35b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCiqQ0+G3bi+2If\n+AH2dzu5hxF0LskwQucusVr9+VTclKo8U8xrhIpyap2fidvUCpC5or+VnhSSvwZP\n0pKjOjcXwx736MkxDyuiOCPn6NGrjvTP54H+YFJ11nomcJgb4cn9TFnNkrFyfDfQ\nIJFfHazWhJWJ1kucgz8sKWLxOCh7F5KlKx4TNlYsauYGr/5Nn9ExZcfXIB4B9292\nBAgYLDHccq7tQ8Qs+mnSemY1gdsMrLFhBq3C66XvbwT4Ava/h4NzsvbmPhB/2zP5\nMrMYsV1iGz5ArF1Wy7ivT0Yp2xPr0PGD/HsPM2/gtocBoCZrjCaOcn2k3p8sxHrc\nsq+oBxklAgMBAAECggEADRXk/RVYCdgX04MP41xBt4Hsb0iRQlrrfrfhXlOn1kv2\nav6B0Dd8LMqzbgF46BTGgkybtYVfWdPYxeSmi8+T3YtCq0Z0owf5pmX2S4KRFYhd\nXPlenZBxqc2si3mc3wdZyNES22Uc9d0U318zWq/INwS5A/rzn752P08ACPBP32EL\n28c8HS7Sjwmbta4gXZqs31dGoXB+KZRPwck91u+ZG+xaXFtLtuQ1h/ALz7Xr8OrZ\nzkf7nr+fYxI+ftzjYgjDnvDjP8CsydDrAsJE5ifFgDi6nNBWvOoLmmiQSImC3hUm\nOdtu70EdWneP8EimMKvGaN3/aCfutfNijziHAQ0xGQKBgQDg7XhDTQtpHzSNDBfq\nqDIVEm3QhHSj991y54I8tRuHeawfPOOc1dj/fhoti8lzOz9JIbGKws4UOinVCT0E\nOOLfBnvxI84pFxfGcIgToGYV4+likEsfOI0qVPwTald3uzhsrgqWvMQjVnJM7PSG\nZmo6RiuSbFhT+nqvwllxj/uqKQKBgQC5IYKSHSWcB8ctsHHWKbfCgVxCmUbNhBy2\nsRpy5Z+WnD5fMgycAvlu4wF20IFfOCVTs6WZWEHh8AqEHJdxZQwbnBuK6vkY5oae\npuQnfcwBj3H/KDsZa/Txs230moACa5D9Znblr0JwplYG+5+SgYK9blAnzJqxm2Ih\nspeT44WOnQKBgQDGI+sBPmmC3R5p8fFPoYMc1PMv8L7fgoXtpssvt0rc+O4LRpQr\noKZbyzY8URvRCqwhPDEuT5VCdEpNhKnfgk04snmUXzpJMDKdeJwmzfGf7vm0/e9v\nPV39oIe+grsymhaGhnqFdxxBFPHzmfl+O9HwK8hOYGse71QMaGRqia/koQKBgQCi\nvFMzr41k5+1tO0IF+SwAPYhlPqlfdPdsnKfcQf8T/IpTUgKFjZPHpqKd19Exa4Bc\nYHl8H3niawhDc4KoeiO3jXUkm0KWYeYKRjgegtU2teqGWc4BncV2RbytHLbT6cxN\nA6oWYwYrUfwjLULrHQ9ZB0RMh+2fnDAZ4QyfQowffQKBgQCjRo3PO99HAWIV6ji0\nyxeVZNWrBe5XuRa+cCXLy5YXx+nu4MH09+kSS1SSGHvBiz6THUBVLO9Gw3FWntYv\nVKljU+oskBXAPOYTMcKOol9brn60o2r5tdj/tl5uF7d0pzfV2nKMgZuFWhp+YAvH\nq+sjvGd4Kyo8GzBv3LthbiquOQ==\n-----END PRIVATE KEY-----\n",
    "client_email": "eventbritetest@internal-236323.iam.gserviceaccount.com",
    "client_id": "114811175625382440693",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/eventbritetest%40internal-236323.iam.gserviceaccount.com"  
}

const handler = async function (event) {
  try {
    const response = await fetch(
      'https://www.eventbriteapi.com/v3/organizations/690467846183/events',
      {
        headers: { Authorization: `Bearer ${EVENTBRITE_TOKEN}` },
      },
    )

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }

    const data = await response.json()

    // setup storage
    const storage = new Storage({
      credentials: creds
    });
    const myBucket = storage.bucket('eventbrite-test');
    const file = myBucket.file('events.json');

    // save
    file.save(data).then(() => file.makePublic());

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
