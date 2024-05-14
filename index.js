const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send("Hello World")
})

//Rota [GET]
app.get('/oi', function (req, res) {
    res.send("Olá, mundo!")
})

//Lista de itens
const itens = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']
//                    0              1              2

//Endpoint de Read All [GET] /item
app.get('/item', function (req, res) {
    res.send(itens)
})

//Endpoint do Read By ID [GET]/item/:id
app.get('/item/:id', function (req, res) {
    //Acessamos o parâmetro de rota ID
    const id = req.params.id
    
    //Acessamos o item na lista usando: ID - 1
    const item = itens[id - 1]

    //Enviamos o item como resposta
    res.send(item)
})

app.listen(3000)