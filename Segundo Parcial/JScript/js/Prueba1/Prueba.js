class Producto{
    constructor(Nombre, precio, cantidad, categoria){
        this.Nombre = Nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario{
    PrDucts = [];

    AgregarProducto(Nombre, precio, cantidad, categoria){
        this.PrDucts.push(new Producto(Nombre, precio, cantidad, categoria));
    }

    FiltrarCategoria(categoria){
        for(let producto of this.PrDucts){
            if(producto.categoria == categoria){
                console.log(producto);
            }
        }
    }

    Descuento(categoria, porcentaje){
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
    realizarVenta(Nombre, cantidad){
        for(let producto of invent.PrDucts){
            if(producto.Nombre == Nombre){
                if(producto.cantidad >= cantidad){
                    producto.cantidad -= cantidad;
                    console.log('Venta realizada del producto ');
                    this.ventas.push(new Producto(producto.Nombre, producto.precio, producto.cantidad, producto.categoria));
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


let invent = new Inventario();
console.log('--------------------PRODUCTOS EN EL INVENTARIO---------------------');
invent.AgregarProducto('Cola', 1, 10, 'Refresco');
invent.AgregarProducto('Papas', 3, 15, 'Snacks');
invent.AgregarProducto('Doritos', 2, 20, 'Snacks');
console.log('--------------------CATEGORIAS FILTRADAS---------------------');
invent.FiltrarCategoria('Snacks');
console.log('--------------------DESCUENTOS---------------------');
invent.Descuento('Snacks', 10)

console.log('----------------VENTAS---------------------');

let venta = new Venta();
venta.realizarVenta('Cola', 3);
venta.realizarVenta('Papas',5);
venta.realizarVenta('Doritos', 6);
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
console.log('Producto que mas se vendió: '+ masVendido.Nombre + 'con ' + masVendido.cantidad + 'unidades vendidas');
console.log('-----------------------------------------------------------------------------------------------------------');


