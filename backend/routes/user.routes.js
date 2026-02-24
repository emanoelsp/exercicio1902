const express = require('express')
const router = express.Router()

const { saveUser, readUsers } = require('../utils/fileHandler')

router.get('/listar_usuarios', (req, res) => {
    const lista_usuarios = readUsers();
    res.json(lista_usuarios)
})

router.get('/listar_usuarios/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id)
    const lista_usuarios = readUsers();
    const usuario = lista_usuarios.find(u => u.id === id_usuario)
    res.json(usuario)
})

router.post('/cadastrar_usuarios', (req, res) => {
    const lista_usuarios = readUsers();
    const novo_id = lista_usuarios.length > 0 ?
        Math.max(...lista_usuarios.map(u => u.id + 1)) : 1
    const novo_usuario = {
        id: novo_id,
        nome: req.body.nome,
        sobrenome: req.body.sobrenome
    }
    lista_usuarios.push(novo_usuario)
    saveUser(lista_usuarios)
    res.json(novo_usuario)
})

router.put('/atualizar_usuarios/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id)
    const lista_usuarios = readUsers()
    const indice = lista_usuarios.findIndex(u => u.id === id_usuario)
    lista_usuarios[indice].nome = req.body.nome
    lista_usuarios[indice].sobrenome = req.body.sobrenome
    saveUser(lista_usuarios)
    res.json(lista_usuarios[indice])
})

router.delete('/deletar_usuarios/:id', (req, res) => {
    const id_usuario = parseInt(req.params.id)
    const lista_usuarios = readUsers()
    const indice = lista_usuarios.findIndex(u => u.id === id_usuario)
    if (indice === -1) {
        res.status(404).json({ error: "Usuário não encontrado" })
    } else {
        lista_usuarios.splice(indice, 1)
        saveUser(lista_usuarios)
        res.json(lista_usuarios)
    }
})

module.exports = router








