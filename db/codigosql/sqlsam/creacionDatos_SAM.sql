-- Creación de tablas

create table user_sam ( -- tabla usuario
id int(20) not null auto_increment,
name varchar(50) default null,
surname varchar (50) default null,
user_type varchar (20) not null,
email varchar (50) default null unique,
password varchar(60) not null,
phone varchar(20) default null,
birth_date date default null,
document_type varchar(20) default null,
document_number varchar (20) default null,
created_at datetime null default null,
primary key (id)
);

create table product ( -- tabla producto
id int(20) not null auto_increment,
name varchar(50) default null,
category varchar(50) default null,
description varchar(5000) default null,
init_prize float(6, 2) default null,
discount varchar(10) default null,
final_prize float(6, 2) default null,
photo varchar(1000) default null,
user_id int(20) not null,
primary key (id),
foreign key (user_id) references user_sam(id)
);

create table order_final ( -- tabla pedido
id int(20) not null auto_increment,
price_final int (20) default null,
order_date date default null,
user_id int(20) not null,
primary key (id),
foreign key (id) references user_sam (id)
);

create table package ( -- tabla paquete
id int(20) not null auto_increment,
date_begin date default null,
date_end date default null,
code_package varchar (20) not null,
user_id int(20) not null,
primary key (id),
foreign key (user_id) references user_sam(id)
);

create table rate ( -- tabla valorar
user_id int(20) not null,
id_product int (20) not null,
comment_in_rate varchar (250) default null,
value_in_rate tinyint (5) default null,
date_comment date,
primary key (user_id, id_product),
foreign key (user_id) references user_sam (id),
foreign key (id_product) references product (id)
);

create table product_include_package ( -- tabla incluido
id_product int(20) not null,
id_paq int(20) not null,
paq_prize int (20) default null,
paq_disc varchar (20) default null,
primary key (id_product, id_paq),
foreign key (id_product) references product(id),
foreign key (id_paq) references package(id)
);

create table enter_product_order ( -- tabla EntraProdPed
id_product int (20) not null,
id_order int (20) not null,
quantity int (200) default null,
price_at_order int (200) default null,
primary key (id_product, id_order),
foreign key (id_product) references product(id),
foreign key (id_order) references order_final(id)
);

create table enter_package_order ( -- tabla EntraPaqPedi
id_paq int(20) not null,
id_order int (20) not null,
primary key (id_paq, id_order),
foreign key (id_paq) references package(id),
foreign key (id_order) references order_final(id)
);

create table pay_method ( -- tabla MétodoPago
id int(20) not null auto_increment,
credit_card varchar (50) default null,
transference varchar (100) default null,
paypal varchar (100) default null,
id_order int (20) not null unique,
primary key (id),
foreign key (id_order) references order_final(id)
);



-- Inserción de datos

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 1
'Proveedor 1',
'Proveedorcito 1',
'Proveedor',
'emaildepersona1@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 2
'Comprador 1',
'Compradorcito 1',
'Comprador',
'emaildepersona2@hotmail.com',
'sdfasdfasdf',
'645655672',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 3
'Organizador 1',
'Organizadorcito 1',
'Organizador',
'emaildepersona3@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 4
'Proveedor 2',
'Proveedorcito 2',
'Proveedor',
'emaildepersona4@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 5
'Comprador 2',
'Compradorcito 2',
'Comprador',
'emaildepersona5@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 6
'Organizador 2',
'Organizadorcito 2',
'Organizador',
'emaildepersona6@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 7
'Proveedor 3',
'Proveedorcito 3',
'Proveedor',
'emaildepersona7@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 8
'Comprador 3',
'Compradorcito 3',
'Comprador',
'emaildepersona8@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into user_sam 
(name, surname, user_type, email, 
password, phone, birth_date, 
document_type, document_number, created_at)
values (
-- id 9
'Organizador 3',
'Organizadorcito 3',
'Organizador',
'emaildepersona9@hotmail.com',
'sdfasdfasdf',
'600123456',
'1975-03-25',
'DNI',
'123456789',
'1995-03-25 13:23:44'
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 1
'Producto 1',
'Categoría 1',
'Generado por Proveedor 1',
20,
10,
18,
'Foto 1',
1
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 2
'Producto 2',
'Categoría 2',
'Generado por Proveedor 2',
20,
10,
18,
'Foto 2',
4
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 3
'Producto 3',
'Categoría 3',
'Generado por Proveedor 3',
20,
10,
18,
'Foto 3',
7
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 4
'Producto 4',
'Categoría 4',
'Generado por Proveedor 1',
20,
10,
18,
'Foto 4',
1
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 5
'Producto 5',
'Categoría 5',
'Generado por Proveedor 2',
20,
10,
18,
'Foto 5',
4
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 6
'Producto 6',
'Categoría 6',
'Generado por Proveedor 3',
20,
10,
18,
'Foto 6',
7
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 7
'Producto 7',
'Categoría 7',
'Generado por Proveedor 1',
20,
10,
18,
'Foto 7',
1
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 8
'Producto 8',
'Categoría 8',
'Generado por Proveedor 2',
20,
10,
18,
'Foto 8',
4
);

insert into product
(name, category, 
description, init_prize, 
discount, final_prize, 
photo, user_id)
values (
-- user_id es el del proveedor
-- id 9
'Producto 9',
'Categoría 9',
'Generado por Proveedor 3',
20,
10,
18,
'Foto 9',
7
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
30,
'2019-07-12',
2
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
20,
'2018-07-12',
5
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
15,
'2010-07-12',
8
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
40,
'2009-07-12',
2
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
50,
'2009-07-12',
5
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
60,
'2009-07-12',
8
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
70,
'2009-07-12',
2
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
80,
'2009-07-12',
5
);

insert into order_final
(price_final, order_date, user_id)
values (
-- user_id es del comprador
45,
'2009-07-12',
8
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 1
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
3
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 2
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
6
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 3
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
9
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 4
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
3
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 5
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
6
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 6
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
9
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 7
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
3
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 8
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
6
);

insert into package(date_begin, date_end, code_package, user_id) 
values (
-- user_id es el del organizador
-- id: 9
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
9
);

insert into rate values (
-- el user_id es el del comprador
2,
1,
'El producto es muy bueno',
3,
'2017-04-05'
);

insert into rate values (
-- el user_id es el del comprador
5,
2,
'El producto es chachi pistachi',
4,
'2016-02-08'
);

insert into rate values (
-- el user_id es el del comprador
8,
3,
'El producto es de lo bueno lo mejor, de lo mejor lo superior',
5,
'2018-03-01'
);

insert into rate values (
-- el user_id es el del comprador
2,
4,
'El producto es muy bueno',
3,
'2017-04-05'
);

insert into rate values (
-- el user_id es el del comprador
5,
5,
'El producto es chachi pistachi',
4,
'2016-02-08'
);

insert into rate values (
-- el user_id es el del comprador
8,
6,
'El producto es de lo bueno lo mejor, de lo mejor lo superior',
5,
'2018-03-01'
);

insert into rate values (
-- el user_id es el del comprador
2,
7,
'El producto es muy bueno',
3,
'2017-04-05'
);

insert into rate values (
-- el user_id es el del comprador
5,
8,
'El producto es chachi pistachi',
4,
'2016-02-08'
);

insert into rate values (
-- el user_id es el del comprador
8,
9,
'El producto es de lo bueno lo mejor, de lo mejor lo superior',
5,
'2018-03-01'
);

insert into product_include_package values (
1,
1,
70,
'20%'
);

insert into product_include_package values (
2,
2,
90,
'40%'
);

insert into product_include_package values (
3,
3,
120,
'80%'
);

insert into product_include_package values (
4,
4,
70,
'20%'
);

insert into product_include_package values (
5,
5,
90,
'40%'
);

insert into product_include_package values (
6,
6,
120,
'80%'
);

insert into product_include_package values (
7,
7,
70,
'20%'
);

insert into product_include_package values (
8,
8,
90,
'40%'
);

insert into product_include_package values (
9,
9,
120,
'80%'
);

insert into enter_product_order values (
1,
1,
15,
20
);

insert into enter_product_order values (
2,
2,
16,
30
);

insert into enter_product_order values (
3,
3,
17,
50
);

insert into enter_product_order values (
4,
4,
18,
20
);

insert into enter_product_order values (
5,
5,
19,
30
);

insert into enter_product_order values (
6,
1,
20,
50
);

insert into enter_product_order values (
7,
1,
21,
20
);

insert into enter_product_order values (
8,
1,
22,
30
);

insert into enter_product_order values (
9,
1,
23,
50
);

insert into enter_package_order values (
1,
1
);

insert into enter_package_order values (
2,
2
);

insert into enter_package_order values (
3,
3
);

insert into enter_package_order values (
4,
4
);

insert into enter_package_order values (
5,
5
);

insert into enter_package_order values (
6,
6
);

insert into enter_package_order values (
7,
7
);

insert into enter_package_order values (
8,
8
);

insert into enter_package_order values (
9,
9
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 1
'2341234561',
null,
null,
1
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values(
null,
-- id: 2
'TRA0012235DF345623',
null,
2
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 3
null,
null,
'PAYP124432BF456346',
3
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 4
null,
null,
'PAYP124432BF456346',
4
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 5
null,
null,
'PAYP124432BF456346',
5
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 6
null,
null,
'PAYP124432BF456346',
6
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 7
null,
null,
'PAYP124432BF456346',
7
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 8
null,
null,
'PAYP124432BF456346',
8
);

insert into pay_method(credit_card, transference, paypal, id_order) 
values (
-- id: 9
null,
null,
'PAYP124432BF456346',
9
);