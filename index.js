const express = require('express')
const app = express()

app.get('oi/', function (req, res) {
  res.send('Olá Mundo')
})

app.listen(3000)