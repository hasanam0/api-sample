const fetch = require('node-fetch')

const url = 'https://restful-booker.herokuapp.com/auth'
const requestBody = {
  "username": "admin",
  "password": "password123"
}

async function generateAuthToken() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody)
  })
  const data = await response.json();
  return data.token
}


module.exports = {
  generateAuthToken
}