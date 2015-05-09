use mapasca2_map;

show tables;

describe puntos_ruta;

create table campus_coord(
i_id_campus_coord integer auto_increment primary key,
i_ordinal integer not null,
s_nombre_marca varchar(128),
f_latitud double not null,
f_longitud double not null,
i_fk_punto_code integer
);

describe campus_coord;


insert into puntos_ruta(i_ordinal,s_nombre_marca,f_latitud,f_longitud) values(1,"CAMPUS UNICO GUADALAJARA",20.7112975,103.3828535);
insert into puntos_ruta(i_ordinal,s_nombre_marca,f_latitud,f_longitud) values(2,"CAMPUS INSTITUTO DE CIENCIAS BIOLOGICAS",20.692557458,103.394972972);
insert into puntos_ruta(i_ordinal,s_nombre_marca,f_latitud,f_longitud) values(3,"CAMPUS TEPIC",21.4998941,104.8819245);
insert into puntos_ruta(i_ordinal,s_nombre_marca,f_latitud,f_longitud) values(4,"CAMPUS TABASCO",18.019364564,92.998827696);

select * from puntos_ruta;
insert into campus_coord(i_ordinal,s_nombre_marca,f_latitud,f_longitud,i_fk_punto_code) values(1,"RECTORIA",20.694115335,103.418911994,1);
insert into campus_coord(i_ordinal,s_nombre_marca,f_latitud,f_longitud,i_fk_punto_code) values(2,"EDIFICIO DE INGENIERIAS",20.693462954,103.421186507,1);
insert into campus_coord(i_ordinal,s_nombre_marca,f_latitud,f_longitud,i_fk_punto_code) values(3,"EDIFICIO DE NEGOCIOS",20.695329761,103.420263827,1);
insert into campus_coord(i_ordinal,s_nombre_marca,f_latitud,f_longitud,i_fk_punto_code) values(4,"EDIFICIO DE CIENCIAS",20.694436506,103.421004117,1);
insert into campus_coord(i_ordinal,s_nombre_marca,f_latitud,f_longitud,i_fk_punto_code) values(5,"ESTADIO 3 DE MARZO",20.693693797,103.416058123,1);

select * from campus_coord;
