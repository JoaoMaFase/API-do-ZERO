import { login } from '../repository/usuarioRepository.js'

import { Router } from "express";
const server = Router()

server.post('/usuario/login', async (req,resposta) => {
    try {
        const { email, senha } = req.body;
        const response = await login(email,senha)
        if (!response){
            throw new Error('Credenciais inválidas')
        }
        resposta.send(response)

    }   catch (err) {
        resposta.status(401).send({
            erro: err.message
        })
    }
})
export default server;
