class Producto{ //CLase producto
    constructor(Nombre, precio, cantidad, categoria){
        this.Nombre = Nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario{ //Clase inventario
    PrDucts = [];

    AgregarProducto(Nombre, precio, cantidad, categoria){ //Agrega producto al inventario de manera dinamica
        this.PrDucts.push(new Producto(Nombre, precio, cantidad, categoria));
    }

    FiltrarCategoria(categoria){ //Filtra productos por categoria
        for(let producto of this.PrDucts){
            if(producto.categoria == categoria){
                console.log(producto);
            }
        }
    }

    Descuento(categoria, porcentaje){ //Aplica descuento a todos los productos de una categoria
        for(let producto of this.PrDucts){
            if(producto.categoria == categoria){
                producto.precio -= producto.precio * (porcentaje / 100);
                console.log('Se ha aplicado el descuento del ' + porcentaje + '% al producto');
                console.log(producto);
            }
        }
    }
}

class Venta{
    ventas = [];
    realizarVenta(Nombre, cantidad){ //Realiza la venta del producto del inventario
        for(let producto of invent.PrDucts){
            if(producto.Nombre == Nombre){ //Verifica si el nombre del producto existe en el inventario
                if(producto.cantidad >= cantidad){ //Verifica si hay suficientes productos en el stock
                    producto.cantidad -= cantidad;
                    console.log('Venta realizada del producto ');
                    this.ventas.push(new Producto(producto.Nombre, producto.precio, cantidad, producto.categoria));
                }else{
                    console.log('NO hay suficientes productos en el stock');
                }
            }
        }
    }

    MostrarVentas(){
        for(let vent of this.ventas){
            console.log(vent);
        }
    }

}

//Agregacion de productos al inventario
let invent = new Inventario();
console.log('--------------------PRODUCTOS EN EL INVENTARIO---------------------');
invent.AgregarProducto('Cola', 1, 10, 'Refresco');
invent.AgregarProducto('Papas', 3, 15, 'Snacks');
invent.AgregarProducto('Doritos', 2, 20, 'Snacks');
invent.AgregarProducto('Celular', 100, 5, 'Electronicos');
invent.AgregarProducto('Cueritos', 2, 30, 'Snacks');
console.log('--------------------CATEGORIAS FILTRADAS---------------------');
invent.FiltrarCategoria('Snacks');
console.log('--------------------DESCUENTOS---------------------');
invent.Descuento('Snacks', 10)
invent.Descuento('Electronicos', 20)
console.log('----------------VENTAS---------------------');

let venta = new Venta();
venta.realizarVenta('Cola', 3);
venta.realizarVenta('Papas',5);
venta.realizarVenta('Doritos', 6);
venta.realizarVenta('Celular', 2);
venta.MostrarVentas();

console.log('');

console.log('---------------------------------------------REPORTE DE VENTAS-----------------------------------------------------------');
console.log('----------PRODUCTOS EN EL INVENTARIO ACTUALIZADO---------');
for(let product of invent.PrDucts){
    console.log(product);
}
console.log('---------VENTAS REALIZADAS INCLUYENDO FECHA Y HORA----------');
for(let vent of venta.ventas){
    console.log(vent);
    console.log('Fecha y hora de la venta: ' + new Date());   
    console.log('····················');
}
console.log('Ninguna venta mas se ha realizado!!!!!!!!!!!!!');
console.log('');
console.log('--------------------TOTAL INGRESOS GENERADOS---------------------');
let totalVentas = 0;
for(let vent of venta.ventas){
    totalVentas += vent.precio;
}
console.log('Total de ingresos generados por ventas: '+ totalVentas);
console.log('--------------------PODUCTO MAS VENDIDO---------------------');
let masVendido = venta.ventas[0];
for(let vent of venta.ventas){
    if(vent.cantidad > masVendido.cantidad){
        masVendido = vent;
    }
}
console.log('Producto que mas se vendió: '+ masVendido.Nombre + ' con ' + masVendido.cantidad + ' unidades vendidas');
console.log('-----------------------------------------------------------------------------------------------------------');


