const process = require('process')
const fetch = require('node-fetch')

const { EVENTBRITE_TOKEN } = process.env

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

    return {
      statusCode: 200,
      body: JSON.stringify({ msg: data }),
    }
  } catch (error) {
    // output to netlify function log
    console.log(error)
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    }
  }
}

module.exports = { handler }
