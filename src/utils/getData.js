export const BASE_API = process.env.API_URL

export const getData = path => {
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
