class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    venderProducto(nombre, cantidad){
        for (let i = 0; i < InventarioI.length; i++){
            if (InventarioI[i].nombre === nombre){
                if (InventarioI[i].cantidad < cantidad){
                    console.log(`No hay suficiente ${nombre}`);
                    return;
                }else{
                InventarioI[i].cantidad -= cantidad;
                console.log(`Se vendieron ${cantidad} ${nombre}`);
                return;
                }
            }
        }
        console.log(`No se encontro el producto ${nombre}`);
    }

    descuento(nombre, descuento){
        for (let i = 0; i < InventarioI.length; i++){
            if (InventarioI[i].nombre === nombre){
                InventarioI[i].precio -= InventarioI[i].precio * (descuento / 100);
                console.log(`Se aplico un descuento de ${descuento}% a ${nombre}`);
                return;
            }
        }
        console.log(`No se encontro el producto ${nombre}`);
    }

}


const producto1 = new Producto('Papas', 2000, 10);
const producto2 = new Producto('Arroz', 5000, 5);
const producto3 = new Producto('Frijoles', 3000, 3);
const producto4 = new Producto('Cerveza', 5000, 5);

const InventarioI = [
    producto1,
    producto2,
    producto3,
    producto4
]

console.log(InventarioI);
producto1.venderProducto('Papas', 5);
producto2.venderProducto('Arroz', 5);
producto3.venderProducto('Frijoles', 4);

for(descuentos of InventarioI){
    descuentos.descuento(descuentos.nombre, 10);
}

console.log(InventarioI);

