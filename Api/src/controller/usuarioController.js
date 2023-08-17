import { login } from '../repository/usuarioRepository.js'

import { Router } from "express";
const server = Router()

server.post('/usuario/login', async (req,resposta) => {
    try {
        const { email, senha } = req.body;
        const response = await login(email,senha)
        resposta.send(response)

    }   catch (err) {
        resposta.status(400).send({
            erro: "Ocorreu um erro lascado"
        })
    }
})