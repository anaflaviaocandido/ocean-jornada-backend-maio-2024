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
    res.send(item. filter(Boolean) )
})

//Sinalizamos que todo corpo de requisição
//virá como Json
app.use(express.json())


//Endpoint de Create [POST] /item
app.post('/item', function (req, res) {
    //Acessamos o corpo da requisição
    const body = req.body

    //Acessar o item no corpo da requisição
    const novoitem = body.nome

    //Adicionar novo item na lista
    itens.push(novoitem)

    //Enviar uma mensagem de sucesso
    res.send('Item adicionado com sucesso: '+ novoitem)
})

// Endpoint de Update [PUT] /item/:id
app.put('/item/:id', function (req, res) {
    // Acessar o ID do parâmetro de rota
    const id = req.params.id
  
    // Acessar o item a ser atualizado, a partir do
    // corpo da requisição
    const body = req.body
    const atualizarItem = body.nome
  
    // Atualizar na lista o item recebido
    itens[id - 1] = atualizarItem
  
    // Enviamos uma mensagem de sucesso
    res.send('Item atualizado com sucesso: ' + id + ', ' + atualizarItem)
  })
  
  // Endpoint de Delete [DELETE] /item/:id
  app.delete('/item/:id', function (req, res) {
    // Acessar o parâmetro de rota ID
    const id = req.params.id
  
    // Executa a operação de exclusão desse item pelo índice
    delete itens[id - 1]
  
    // Enviamos uma mensagem de sucesso
    res.send('Item removido com sucesso: ' + id)
  })
  
app.listen(3000)