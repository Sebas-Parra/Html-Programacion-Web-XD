//SISTEMA DE VENTAS EN JS

//Creación de la Clase producto
class Producto{
    static contadorProductos = 0;
    //Modificar static
    //Se utiliza ara acceder directamente a traves de la clase

    //Los metodos o propiedades no requieren que se creen una instancia
    //de la clase para ser utilizados
    //Se acceden directamente a través de la clase

    constructor(nombre, precio,categoria, cantidad){
        this._idproducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
        this._categoria = categoria;
        this._cantidad = cantidad;
    }

    get IdProducto(){
        return this._idproducto;
    }

    get Nombre(){
        return this._nombre;
    }

    set Nombre(nombre){
        this._nombre = nombre;
    }

    get Precio(){
        return this._precio;
    }

    set Precio(precio){
        if (precio >= 0) {
            this._precio = precio;
        } else {
            console.log('El precio no puede ser negativo');
        }
    }

    get Cantidad(){
        return this._cantidad;
    }

    set Cantidad(cantidad){
        this._cantidad = cantidad;
    }

    get Categoria(){
        return this._categoria;
    }

    toString(){
        return `IdProducto: ${this._idproducto}, Nombre: ${this._nombre}, Precio: $${this._precio}, Cantidad: ${this._cantidad}, Categoria: ${this._categoria}`;
    }

    
}




//Creación de la clase Orden

class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){ //Cuando se trabaja con constantes se recomienda crear en mayusculas
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            if(producto.Cantidad > 0){
                producto.Cantidad--;
                
                this._productos.push(producto);
                //this._productos[this._contadorProductosAgregados++] = producto;
            }else{
                console.log('No hay existencias del producto');
            }
        }else{
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.Precio;
            //Descuento
            if(producto.Categoria === 'Tecnologia'){
                totalVenta = totalVenta -( producto.Precio * 0.1);
                
            }
            if(producto.Categoria === 'Comida'){
                totalVenta = totalVenta - (producto.Precio * 0.15);
                
            }
            if(producto.Categoria === 'Bebida'){
                totalVenta = totalVenta - (producto.Precio * 0.20);
               
            }
            if(producto.Categoria === 'Ropa'){
                
                totalVenta = totalVenta - (producto.Precio * 0.05);
                
            }
        }
        console.log(`Orden: ${this._idOrden}, Total sin impuestos y con descuento: $${totalVenta}`); 
        return this.calcularImpuestos(totalVenta);
    }

    calcularImpuestos(calculoTotal){
        for(let producto of this._productos){
            calculoTotal += producto.Precio * 0.16;
        }
        return calculoTotal;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(const producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden}, Total con impuestos: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

    ProductosOrdenDescentePrecios(){
        let ordenados = this._productos.sort((a, b) => b.Precio - a.Precio);
        for (const producto of ordenados) {
            console.log(producto.toString());
        }
    }
    

}

let producto1 = new Producto('Pantalon', 200, 'Ropa', 20);
let producto2 = new Producto('Camisa', 100,'Ropa', 10);
console.log(producto1.toString());
console.log(producto2.toString());



console.log('------------------------Productos de la Orden 1--------------------------------');

let orden1 = new Orden();//Objeto tipo Orden
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

console.log('------------------------Productos de la Orden 1 ordenados por precio descendente-----------------------');
orden1.ProductosOrdenDescentePrecios();

let orden2 = new Orden();//Crear un segundo objeto de tipo orden
let producto3 = new Producto('Cinturon', 50,'Ropa', 20);
let producto4 = new Producto('Corbata', 30, 'Ropa', 20);
let producto5 = new Producto('Calcetines', 10, 'Ropa', 15);
let producto6 = new Producto('Playera', 50, 'Ropa', 50);
let producto7 = new Producto('Hamburguesas', 100, 'Comida', 10);
let producto8 = new Producto('Papas', 50, 'Comida', 20);
let producto9 = new Producto('Refresco', 20, 'Bebida', 30);
let producto10 = new Producto('Agua', 10, 'Bebida', 50);


console.log('------------------------Productos de la Orden 2--------------------------------');

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.mostrarOrden();

console.log('------------------------Productos de la Orden 2 ordenados por precio descendente-----------------------');
orden2.ProductosOrdenDescentePrecios();





//Stock debe dismunuir


//Descuento por categoria
//Crear una propiedad categoria en la clase producto
//Los productos de la categoria tecnologia deben tener un descuento del 10% al calcular el total de su venta

//Implementar un metodo calcularIMpuestos()

//Listar Productos por precio descendente

//Asegurarse que los precios no pueden ser negativos al establecerlos en la clase Producto



//Ejemplo de static
// class Calculadora{
//     //Metodo estatico
//     static sumar(a, b){
//         return a + b;
//     }
// }

//Acceso al metodo estatico directamente desde la clase
//console.log(Calculadora.sumar(5, 3));
//NO se puede acceder desde una instancia
//const calc = new Calculadroa();
//console.log(calc.sumar(5,3));

// class Contador{
//     static totalInstancias = 0;

//     constructor(){
//         Contador.totalInstancias++
//     }
//     static mostrarInstancias(){
//         return `Se han creado ${Contador.totalInstancias} instancias`;
//     }
    
// }

// const c1 = new Contador();
// const c2 = new Contador();
// console.log(Contador.mostrarInstancias());


