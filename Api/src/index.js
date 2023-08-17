import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usuarioController from './controller/usuarioController.js'
const server = express()
server.use(cors())
server.use(express.json())

// Configuração dos endpoints
server.use(usuarioController)

server.listen(process.env.PORT, () => console.log(`API conectada na porta ${process.env.PORT}`))