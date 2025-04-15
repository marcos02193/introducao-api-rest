import express from "express"
const app = express()
const port = 3000

//permite que o express possa usar express.json
app.use(express.json())

// banco de dados fakes (em memória)
const usuario = [
  {id: 1, nome: "jonas", email: "jonas@gmail.com"},
  {id: 2, nome: "milly", email: "milly@gmail.com"}
]


app.get('/', (req, res) => { // get = buscar algo pedido
 res.send('bem vindo a minha API') // send = enviar
})// res.send = enviar resposta

app.get("/usuarios", (req, res) => {
  res.send(`
    estou de folga
    ${JSON.stringify(usuario)}
    `)
})

app.post("/criarusuario", (req, res) =>{ // post = criar algo como senha etc
  const { nome } = req.body
  res.send(nome)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
