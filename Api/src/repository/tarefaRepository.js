import {con} from './connection.js'

export async function inserirTarefa(tarefa){
    const comando = 
    `insert into tb_tarefa(id_usuario,ds_tarefa,nr_ordem,bt_finalizado,dt_cadastro)
	            values (?, ?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [tarefa.usuario, tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.cadastro]);
    tarefa.id = resposta.insertId;

    return tarefa;
}

export async function listarTodasTarefas(){
    const comando = 
    `select	id_tarefa		id,
            ds_tarefa		descricao,
            nr_ordem		ordem,
            bt_finalizado	finalizado,
            dt_cadastro		cadastro
    from	tb_tarefa;`

    const [linhas] = await con.query(comando)
    return linhas
}

export async function listarTodasTarefasFinalizadas(){
    const comando = 
    `select	id_tarefa		id,
            ds_tarefa		descricao,
            nr_ordem		ordem,
            bt_finalizado	finalizado,
            dt_cadastro		cadastro
    from	tb_tarefa
    where   bt_finalizado = true`

    const [linhas] = await con.query(comando)
    return linhas
}

export async function deletarTarefa(id){
    const comando = 
    `delete from tb_tarefa
        where id_tarefa = ?`
    const [resposta] = await con.query(comando, [id])
    return resposta.affectedRows
}