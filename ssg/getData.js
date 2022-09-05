const BASE_API = 'https://salinatomass-api.onrender.com'
const fetch = require('isomorphic-fetch')

const getData = path => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${BASE_API}${path}`)
      const data = await response.json()
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}

module.exports = { getData }
