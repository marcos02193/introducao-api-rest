import express from "express"
import usuariosroutes from "./routes/usuarios.js"
import fornecedores from "./routes/fornecedores.js"
import produtos from "./routes/produtos.js"
const app = express()
const port = 3000

//permite que o express possa usar express.json
app.use(express.json())
app.use("/usuarios", usuariosroutes)
app.use("/fornecedores", fornecedores)
app.use("/produtos", produtos)
// rota inicio
app.get('/', (req, res) => { // get = buscar algo pedido
  res.status(200).json(usuario) // send = enviar
})// res.send = enviar resposta



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
