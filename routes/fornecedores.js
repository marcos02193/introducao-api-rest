import express  from "express"

const router = express.Router()

const fornecedores = [
    {id: 1, nome: "exaprint"},
    {id: 2, nome: "pmenoslab"}
]


router.get("/", (req, res) => {
    res.status(200).json(fornecedores)
})

export default router