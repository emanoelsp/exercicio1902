const express = require('express')
const app = express()
const PORT = 3000

let usuarios = require('./data/users')

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando em htttp://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Você acessou a página inicial')
}) 

app.get('/listar_usuarios', (req, res) => {
    res.json(usuarios)
})

app.get('/listar_usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const usuario_localizado =  usuarios.find(u => u.id === id)

    if (!usuario_localizado){
        return res.json("Usuário não encontrado")
    } else {
        res.json(usuario_localizado)
    }
})

app.delete('/deleta_usuario/:id', (req, res) => {
     const id = parseInt(req.params.id)

    const usuario_deletado =  usuarios.filter(u => u.id !== id)

    res.json(`${usuario_deletado} " Usuario deletado com sucesso`)
})