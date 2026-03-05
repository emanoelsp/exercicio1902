const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const userRoutes = require('./routes/user.routes')

app.use(cors({ origin: 'http://localhost:3001' }))
app.use(express.json())

app.use('/usuarios', userRoutes)

app.listen(PORT, () => {
    console.log(`Servidor rodando em htttp://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Você acessou a página inicial')
    res.json('Você acessou a página inicial')
})











