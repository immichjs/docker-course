const express = require('express')
const axios = require('axios').default
const app = express()

app.use(express.json())

app.get('/', async (request, response) => {
  const results = await axios.get('https://randomuser.me/api').then(({ data }) => (data))

  return response.json(results)
})

app.listen(3000, () => console.log('http://localhost:3000'))
