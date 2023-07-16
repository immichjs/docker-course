const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
  return response.send('Hello World')
})

app.listen(PORT, () => console.log(`Executando: http://localhost:${PORT}`))