import { deletarTarefa, inserirTarefa , listarTodasTarefas, listarTodasTarefasFinalizadas } from '../repository/tarefaRepository.js'

import { Router } from  'express'
const server = Router()

server.post('/tarefa', async (req, resp) => {
    try {
        const tarefaParaInserir = req.body

        if (!tarefaParaInserir.usuario)
        throw new Error('Usuário não logado!');
        if (!tarefaParaInserir.descricao)
            throw new Error('Descrição da tarefa é obrigatório!');
        if (!tarefaParaInserir.ordem || tarefaParaInserir.ordem < 1)
            throw new Error('Ordem da tarefa é obrigatório!');
        if (!tarefaParaInserir.ordem)
            throw new Error('Campo finalizado é obrigatório!');
        if (!tarefaParaInserir.cadastro)
            throw new Error('Data de cadastro é obrigatória!');

        const tarefaInserida = await inserirTarefa(tarefaParaInserir)

        resp.send(tarefaInserida)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/tarefa', async (req, resp) =>{
    try {
        const resposta = await listarTodasTarefas()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/tarefa/finalizadas', async (req, resp) =>{
    try {
        const resposta = await listarTodasTarefasFinalizadas()
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('tarefa/:id', async (req, resp) => {
    try {
        const {id} = req.params

        const resposta = await deletarTarefa(id)
        if (resposta != 1)
            throw new Error('Tarefa não pode ser removida.')

        resp.status(204).send
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})







export default server;

