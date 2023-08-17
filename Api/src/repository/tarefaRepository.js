import {con} from './connection.js'

export async function inserirTarefa(tarefa){
    const comando = 
    `insert into tb_tarefa(id_usuario,ds_tarefa,nr_ordem,bt_finalizado,dt_cadastro)
	            values (?, ?, ?, ?, ?)`
    const [resposta] = await con.query(comando, [tarefa.usuario, tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.cadastro]);
    tarefa.id = resposta.insertId;

    return tarefa;
}