use tarefa_db;


-- cadastrar novo admin
insert into tb_usuario(nm_usuario,ds_email,ds_senha)
	values('admin','admin@admin.com.br',1234)


-- cadastrar nova tarefa
insert into tb_tarefa(ds_tarefa,nr_ordem,bt_finalizado,dt_cadastro)
	values ();

-- alterar tarefa
update tb_tarefa
	set ds_tarefa	= '',
    nr_ordem		= 1,
    bt_finalizado	= true,
    dt_cadastro		= '2023-03-10'
where id_tarefa 	= 1;

-- deletar filme
delete from tb_tarefa
	where id_tarefa = 1;
    
-- consultar todas as tarefas
select	id_tarefa		id,
		ds_tarefa		descricao,
		nr_ordem		ordem,
        bt_finalizado	finalizado,
		dt_cadastro		cadastro
from	tb_tarefa;

-- consultar tarefas por nome
select	id_tarefa		id,
		ds_tarefa		descricao,
		nr_ordem		ordem,
        bt_finalizado	finalizado,
		dt_cadastro		cadastro
from 	tb_tarefa
where	nm_filme		like '%a%';

-- consultar tarefas por id
select	id_tarefa		id,
		ds_tarefa		descricao,
		nr_ordem		ordem,
        bt_finalizado	finalizado,
		dt_cadastro		cadastro
from 	tb_tarefa
where	nm_filme		= 1;