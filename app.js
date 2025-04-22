import express from "express"
const app = express()
const port = 3000

//permite que o express possa usar express.json
app.use(express.json())

// banco de dados fakes (em memória)
const usuario = [
  { id: 1, nome: "jonas", email: "jonas@gmail.com" },
  { id: 2, nome: "milly", email: "milly@gmail.com" }
]


app.get('/', (req, res) => { // get = buscar algo pedido
  res.status(200).json(usuario) // send = enviar
})// res.send = enviar resposta

app.get("/usuarios", (req, res) => {
  res.send(usuario)
})
// criar usuario
app.post("/criarusuario", (req, res) => { // post = criar algo como senha etc
  const { nome, email } = req.body
  const users = {
    id: usuario.length + 1, nome: nome, email: email
  }

  usuario.push(users)
  // adicionar o usuario no banco de dados

  res.status(201).json(usuario)
  // res.status(201)send(usuario)
})
// atualizar usuario
app.put("/usuario/:id", (req, res) => {
  const { id } = req.params
  const { novonome, novoemail } = req.body

  const indice = usuario.findIndex((usuarios) => {
    return usuarios.id == id
  })
if (indice === -1){
  return res.status(404).json({mensagem: "usuario não encontrado"}) // return para encerrar a função
}

  usuario[indice].nome = novonome
  usuario[indice].email = novoemail
  res.send(usuario)
})

// deletar usuario
app.delete('/usuario/:id', (req, res) => {
    // splaci = primeiro params aonde vc qr apagar, quantos vc qr apagar e o que vc quer adicionar
    const {id} = req.params

    const indice = usuario.findIndex((usuarios) => {
      return usuarios.id == id
    })
    if (indice === -1){
      return res.status(404).json({mensagem: "usuario não encontrado"}) // return para encerrar a função
    }
    usuario.splice(indice, 1)

  res.send(usuario)
})








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
