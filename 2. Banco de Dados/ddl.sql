create database tarefa_db;
use tarefa_db;

create table tb_tarefa (
	id_tarefa	int primary key auto_increment,
    ds_tarefa	varchar(400),
    nr_ordem	int,
    bt_finalizado	boolean,
    dt_cadastro	datetime
);