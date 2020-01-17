-- Consultar todos los pedidos de un usuario

-- Productos simple
select 
p.id, 
p.name, 
p.category, 
p.description, 
p.init_prize, 
p.discount, 
p.final_prize, 
p.photo, 
p.user_id
from product p
inner join enter_product_order eproo
on p.id = eproo.id_product 
inner join order_final of
on eproo.id_order = of.id
inner join user_sam us
on of.id = us.id
where us.id=2

-- Paquetes simple
select 
paq.id, 
paq.date_begin, 
paq.date_end, 
paq.code_package, 
paq.user_id
from package paq
inner join enter_package_order epaqo
on paq.id = epaqo.id_paq 
inner join order_final of
on epaqo.id_paq = of.id
inner join user_sam us
on of.id = us.id
where us.id=2



-- Método 1
-- Para todos los productos
select 
p.id, 
p.name, 
p.category, 
p.description, 
p.init_prize, 
p.discount, 
p.final_prize, 
p.photo, 
p.user_id
from product p
inner join enter_product_order eproo
on p.id = eproo.id_product 
inner join order_final of
on eproo.id_order = of.id
inner join user_sam us
on of.id = us.id
where us.id=2

-- Para todos los paquetes
select 
p.id, 
p.name, 
p.category, 
p.description, 
p.init_prize, 
p.discount, 
p.final_prize, 
p.photo, 
p.user_id
from product p
inner join product_include_package  pip
on p.id = pip.id_product 
inner join package paq
on pip.id_paq = paq.id
inner join enter_package_order  epaqo
on paq.id = epaqo.id_paq
inner join order_final of
on epaqo.id_order = of.id
inner join user_sam us
on of.id = us.id
where us.id=2


-- Método 2
-- Todo junto con union o con union all (con este último, devuelve las entradas repetidas)
select 
p.id, 
p.name, 
p.category, 
p.description, 
p.init_prize, 
p.discount, 
p.final_prize, 
p.photo, 
p.user_id
from product p
inner join enter_product_order eproo
on p.id = eproo.id_product 
inner join order_final of
on eproo.id_order = of.id
inner join user_sam us
on of.id = us.id
where us.id=2

union all

select 
p.id, 
p.name, 
p.category, 
p.description, 
p.init_prize, 
p.discount, 
p.final_prize, 
p.photo, 
p.user_id
from product p
inner join product_include_package  pip
on p.id = pip.id_product 
inner join package paq
on pip.id_paq = paq.id
inner join enter_package_order  epaqo
on paq.id = epaqo.id_paq
inner join order_final of
on epaqo.id_order = of.id
inner join user_sam us
on of.id = us.id
where us.id=2