const express = require('express')
const axios = require('axios').default
const app = express()
const userModel = require('./user.schema')

app.use(express.json())

app.get('/', async (request, response) => {
  const users = await userModel.find()
  return response.json(users)
})

app.post('/', async (request, response) => {
  const results = await axios.get('https://randomuser.me/api').then(({ data }) => (data.results[0].name.first))

  const user = await userModel.create({ name: results })
  await user.save()

  return response.json(user)
})

app.listen(3000, () => console.log('http://localhost:3000'))
