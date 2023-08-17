create database tarefa_db;
use tarefa_db;

create table tb_usuario (
	id_usuario	int primary key auto_increment,
    nm_usuario	varchar(200),
	ds_email	varchar(200),
    ds_senha	varchar(20)
);

create table tb_tarefa (
	id_tarefa	    int primary key auto_increment,
    id_usuario		int,
    ds_tarefa	    varchar(400),
    nr_ordem	    int,
    bt_finalizado	boolean,
    dt_cadastro 	datetime,
    foreign key (id_usuario) references tb_usuario(id_usuario)
);  