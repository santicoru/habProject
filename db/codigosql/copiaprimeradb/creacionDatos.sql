-- Creación de tablas

create table userType ( -- tabla usuario
idUser varchar(20) not null unique,
nameOrSocial varchar(50) default null,
surname varchar (50) default null,
userType varchar (20) not null,
email varchar (50) default null,
passwordAccount varchar(20) not null,
phone varchar(20) default null,
birthDate date default null,
primary key (idUser)
);

create table product ( -- tabla producto
idProduct varchar (20) not null unique,
nameProduct varchar(50) default null,
category varchar(50) default null,
prizeProduct int(50) default null,
description varchar(50) default null,
imageAddress varchar(50) default null,
primary key (idProduct)
);

create table package ( -- tabla paquete
idPaq varchar(20) not null unique,
prizePaq int (200) default null,
dateBegin date default null,
dateEnd date default null,
codePackage varchar (20) not null,
discount int (20) default null,
primary key (idPaq)
);

create table orderFinal ( -- tabla pedido
idOrder varchar (20) not null unique,
priceFinal int (20) default null,
orderDate date default null,
primary key (idOrder)
);

create table userColaborator ( -- tabla colaborador
idUserColab varchar(20) not null unique,
idProduct varchar (20) not null unique,
primary key (idUserColab),
foreign key (idUserColab) references userType(idUser),
foreign key (idProduct) references product (idProduct)
);

create table userBuyer ( -- tabla comprador
idUserBuy varchar(20) not null unique,
idOrder varchar (20) not null unique,
primary key (idUserBuy),
foreign key (idUserBuy) references userType(idUser),
foreign key (idOrder) references orderFinal(idOrder)
);

create table userOrganizer ( -- tabla organizador
idUserOrgan varchar(20) not null unique,
idPaq varchar(20) not null unique,
primary key (idUserOrgan),
foreign key (idUserOrgan) references userType(idUser),
foreign key (idPaq) references package (idPaq)
);

create table contactColabBuy ( -- tabla ContactaColCompr
idMessage varchar (20) not null unique,
idUserColab varchar(20) not null unique,
idUserBuy varchar(20) not null unique,
message varchar(250),
primary key (idMessage),
foreign key (idUserColab) references userColaborator (idUserColab),
foreign key (idUserBuy) references userBuyer (idUserBuy)
);

create table contactColabOrgan ( -- tabla ContactaColOrg
idMessage varchar (20) not null unique,
idUserColab varchar(20) not null unique,
idUserOrgan varchar(20) not null unique,
message varchar(250) default null,
primary key (idMessage),
foreign key (idUserColab) references userColaborator (idUserColab),
foreign key (idUserOrgan) references userOrganizer (idUserOrgan)
);

create table nameComm ( -- tabla nombre
idUserBuy varchar(20) not null unique,
idProduct varchar (20) not null unique,
commentInName varchar (250) default null,
valueInName tinyint (5) default null,
dateComment date,
primary key (idUserBuy, idProduct),
foreign key (idUserBuy) references userBuyer (idUserBuy),
foreign key (idProduct) references product (idProduct)
);

create table enterProductOrder ( -- tabla EntraProdPed
idProduct varchar (20) not null unique,
idOrder varchar (20) not null unique,
quantity int (200) default null,
priceAtOrder int (200) default null,
primary key (idProduct, idOrder),
foreign key (idProduct) references product(idProduct),
foreign key (idOrder) references orderFinal(idOrder)
);

create table enterPackageOrder ( -- tabla EntraPaqPedi
idPaq varchar(20) not null unique,
idOrder varchar (20) not null unique,
quantity int (200) default null,
priceAtOrder int (200) default null,
primary key (idPaq, idOrder),
foreign key (idPaq) references package(idPaq),
foreign key (idOrder) references orderFinal(idOrder)
);

create table productIncludePackage ( -- tabla incluido
idProduct varchar (20) not null unique,
idPaq varchar(20) not null unique,
primary key (idProduct, idPaq),
foreign key (idProduct) references product(idProduct),
foreign key (idPaq) references package(idPaq)
);

create table payMethod ( -- tabla MétodoPago
idPayMethod varchar (20) not null unique,
creditCard varchar (50) default null,
transference varchar (100) default null,
paypal varchar (100) default null,
idOrder varchar (20) not null unique,
primary key (idPayMethod),
foreign key (idOrder) references orderFinal(idOrder)
);



-- Inserción de datos

insert into userType values (
'A10100001',
'Jonathan',
'Harker',
'Colaborator',
'jonathanharker@hotmail.com',
'3456fgJ7Xs',
'600000001',
'1975-03-25'
);

insert into userType values (
'B20200001',
'Mina',
'Murray',
'Buyer',
'minamurray@hotmail.com',
'34d7IKJ7Xs',
'600304001',
'1977-08-10'
);

insert into userType values (
'C30300001',
'Lucy',
'Westenra',
'Organizer',
'lucywestenra@hotmail.com',
'sD4YfgJ7Xs',
'604577001',
'1977-12-04'
);

insert into userType values (
'A10100002',
'Arthur',
'Holmwood',
'Colaborator',
'arthurholmwood@hotmail.com',
'dF3VfgJ7Xs',
'600004378',
'1970-07-14'
);

insert into userType values (
'B20200002',
'Quincey',
'Morris',
'Buyer',
'quinceymorris@hotmail.com',
'3456tR52x',
'600044762',
'1970-01-08'
);

insert into userType values (
'C30300002',
'John',
'Seward',
'Organizer',
'johnseward@hotmail.com',
'3456sXJ4',
'634174762',
'1970-03-24'
);

insert into userType values (
'A10100003',
'Abraham',
'van Helsing',
'Colaborator',
'abrahamvanhelsing@hotmail.com',
'dF3VfhS41n',
'644813378',
'1963-01-11'
);

insert into userType values (
'B20200003',
'Phileas',
'Fogg',
'Buyer',
'phileasfogg@hotmail.com',
'34dA8b52x',
'600331784',
'1968-04-15'
);

insert into userType values (
'C30300003',
'Rodney',
'Skinner',
'Organizer',
'rodneyskinner@hotmail.com',
'Df3sUXJ4',
'634142983',
'1973-10-10'
);

insert into product values (
'PR0100001',
'Nombre: producto 1',
'Categoría: categoría 1',
20,
'Descripción: buen producto',
'Dirección de la imagen: dirección 1'
);

insert into product values (
'PR0200002',
'Nombre: producto 2',
'Categoría: categoría 2',
30,
'Descripción: muy buen producto',
'Dirección de la imagen: dirección 2'
);

insert into product values (
'PR0300003',
'Nombre: producto 3',
'Categoría: categoría 3',
50,
'Descripción: magnífico producto',
'Dirección de la imagen: dirección 3'
);

insert into package values (
'PA0000001',
40,
'2019-01-01',
'2019-12-31',
'PACdfCa23T',
20
);

insert into package values (
'PA0000002',
80,
'2020-02-15',
'2020-10-15',
'PACdfxs5Gi',
40
);

insert into package values (
'PA0000003',
120,
'2021-01-15',
'2021-12-25',
'PACdfcSd2B',
60
);

insert into orderFinal values (
'PE0000001',
20,
'2019-08-24'
);

insert into orderFinal values (
'PE0000002',
30,
'2017-01-04'
);

insert into orderFinal values (
'PE0000003',
50,
'2014-02-14'
);

insert into userColaborator values (
'A10100001',
'PR0100001'
);

insert into userColaborator values (
'A10100002',
'PR0200002'
);

insert into userColaborator values (
'A10100003',
'PR0300003'
);

insert into userBuyer values (
'B20200001',
'PE0000001'
);

insert into userBuyer values (
'B20200002',
'PE0000002'

);

insert into userBuyer values (
'B20200003',
'PE0000003'
);

insert into userOrganizer values (
'C30300001',
'PA0000001'
);

insert into userOrganizer values (
'C30300002',
'PA0000002'
);

insert into userOrganizer values (
'C30300003',
'PA0000003'
);

insert into contactColabBuy values (
'M00000001',
'A10100001',
'B20200001',
'Hola, dime algo'
);

insert into contactColabBuy values (
'M00000002',
'A10100002',
'B20200002',
'Hola, estoy aquí'
);

insert into contactColabBuy values (
'M00000003',
'A10100003',
'B20200003',
'Hola, dime algo'
);

insert into contactColabOrgan values (
'M00000004',
'A10100001',
'C30300001',
'Buenas, estoy en casa'
);

insert into contactColabOrgan values (
'M00000005',
'A10100002',
'C30300002',
'Buenas, trabajando'
);

insert into contactColabOrgan values (
'M00000006',
'A10100003',
'C30300003',
'Buenas, leyendo'
);

insert into nameComm values (
'B20200001',
'PR0100001',
'El producto es muy bueno',
3,
'2017-04-05'
);

insert into nameComm values (
'B20200002',
'PR0200002',
'El producto es chachi pistachi',
4,
'2016-02-08'
);

insert into nameComm values (
'B20200003',
'PR0300003',
'El producto es de lo bueno lo mejor, de lo mejor lo superior',
5,
'2018-03-01'
);

insert into enterProductOrder values (
'PR0100001',
'PE0000001',
1,
20
);

insert into enterProductOrder values (
'PR0200002',
'PE0000002',
2,
30
);

insert into enterProductOrder values (
'PR0300003',
'PE0000003',
3,
50
);

insert into enterPackageOrder values (
'PA0000001',
'PE0000001',
1,
20
);

insert into enterPackageOrder values (
'PA0000002',
'PE0000002',
2,
30
);

insert into enterPackageOrder values (
'PA0000003',
'PE0000003',
1,
20
);

insert into productIncludePackage values (
'PR0100001',
'PA0000001'
);

insert into productIncludePackage values (
'PR0200002',
'PA0000002'
);

insert into productIncludePackage values (
'PR0300003',
'PA0000003'
);

insert into payMethod values (
'PAYM00001',
'2341234561',
null,
null,
'PE0000001'
);

insert into payMethod values (
'PAYM00002',
null,
'TRA0012235DF345623',
null,
'PE0000002'
);

insert into payMethod values (
'PAYM00003',
null,
null,
'PAYP124432BF456346',
'PE0000003'
);