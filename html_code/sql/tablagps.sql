show databases;

create database mapasca2_map;

use mapasca2_map;

show tables;

create table puntos_ruta(
i_id_punto_ruta integer primary key auto_increment,
i_ordinal integer not null,
s_nombre_marca varchar(128),
f_latitud double not null,
f_longitud double not null
);

describe puntos_ruta;


