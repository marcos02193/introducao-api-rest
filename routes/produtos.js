import express from "express"
const router = express.Router()

const produtos = [
    { id: 1, nome: 'Mouse', preco: 20 },
    { id: 2, nome: 'teclado', preco: 50 }
]

router.get("/produtos", (req, res) => {
    res.status(200).json(produtos)
})

router.post("/addprodutos", (req, res) => {
    const {nome, preco} = req.body
    const produto = {
        id: produtos.length + 1, nome: nome, preco: preco
      }
      produtos.push(produto)

    res.status(201).json(produtos)
})


router.put("/updateprodutos/:id", (req, res) => {
    const { id } = req.params
    const { novonome, novopreco } = req.body
  
    const indice = produtos.findIndex((produto) => {
      return produto.id == id
    })
  if (indice === -1){
    return res.status(404).json({mensagem: "usuario não encontrado"})                                                // return para encerrar a função
  }
  
    produtos[indice].nome = novonome
    produtos[indice].preco = novopreco
    res.status(200).json(produtos)
//   res.status(204).send()
})

router.delete("/deleteprodutos/:id", (req, res) => {
     const {id} = req.params
  
      const indice = produtos.findIndex((produto) => {
        return produto.id == id
      })
      if (indice === -1){
        return res.status(404).json({mensagem: "usuario não encontrado"}) // return para encerrar a função
      }
      produtos.splice(indice, 1)
      res.status(200).json(produtos)
})

router.get("/searchprodutos/:id", (req, res) => {
    const {id} = req.params
  
      const indice = produtos.findIndex((produto) => {
        return produto.id == parseInt(id)
      })
    
      res.status(200).json(produtos[indice])
})








export default router