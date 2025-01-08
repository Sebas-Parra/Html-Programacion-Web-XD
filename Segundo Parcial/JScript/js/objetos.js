/*********************************************************
                        OBJETOS
 **********************************************************/

//Caracteristicas principales de los objetos en JavaScript

//Claves y Valores

//Las claves son cadenas o simbolos(unicos).
//Los valores pueden ser cualquier tipo: numeros, cadenas, funciones, otros tipos de objetos

//Dinamismo

//Los objetos pueden modificarse en tiempo de ejecución (agregar, modificar, o eliminar propiedad).

//Metodos
//Los metodos son funciones asociadas a un objeto.

//Propiedades y metodos

//Declaracion objeto

let persona = {
    nombre: 'Juan',
    apellido: 'perez',
    email: 'jperez@gmail.com',
    edad: 25
}

console.log(persona);

//Metodos en objetos

// let persona2 = {
//     nombre: 'Dario',
//     apellido: 'Vargas',
//     direccion: 'Quito',
//     email: 'dvargas@gmail.com',
//     nombreCompleto: function(){
//         return this.nombre + ' ' + this.apellido;
//     }
// }

// console.log(persona2.nombreCompleto());
//ctrl + k + c para comentar todo lo subrayado

const persona3 = {
    nombre: 'Maria',
    edad: 25,
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
}

console.log(persona3.nombre);
persona3.saludar();

//Crear un Objeto usando el constructor Object
//otra forma de crear un objeto vacio y agregarle porpiedades posteriormente

const persona4 = new Object(); //Crea un objeto en memoria, es decir reserva un nuevo espacio de memoria
persona4.nombre = 'Jose';
persona4.apellido = 'Marinez';
persona4.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre}`);
}

console.log(persona4.apellido);
persona4.saludar();

//usando la clase Object.create()
//Permite crear un objeto basado en un prototipo

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola desde prototipo, soy ${this.nombre}`);
        
    }
}

const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Carlos';
//uso
persona5.saludar();

//Usando clases
//proporciona una sintaxis mas estructurada para la creación de objetos JS

class Persona {
    constructor(nombre, apellido, edad, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.telefono = telefono;
    }
    saludo(){
        console.log(`Hola desde clases, me llamo ${this.nombre}`);
    }
}

const persona6 = new Persona('Ana','Rios',24,232323);
persona6.saludo();

//Usando funciones constructoras
//Una forma clasica

function Persona1(nombre, edad, email) {
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.saludos = function(){
        console.log(`Hola desde funciones constructoras, me llamo ${this.nombre}`);
    }
}

const persona7 = new Persona1('Luis',28,'lpersona@gmail.com');
persona7.saludos();

//Manipular objetos

//1. Agregar o modificar propiedades

const add = {nombre:'Pedro'};
add.edad = 35; //Agregando una nueva propiedad
add.apellido = 'Bosque'; //Agregar otra propeidad.

add.nombre = 'Andres';

console.log(add);

//2. Eliminacion de las propiedades de un objeto

// delete add.edad;

// console.log(add);

//3. Iterar sobre las propiedades del objeto

for (nombrePropiedad in add){
    console.log(nombrePropiedad);
    console.log(add[nombrePropiedad]);
}

for(let clave in add){
    console.log(`${clave}: ${add[clave]}`);
}

//4. Verificar las peropiedades
console.log('nombre' in add);
console.log(add.hasOwnProperty('email'));

//Entorno utiles para trabajar con objetos

//1. Object.keys()
//devuelve un array con las claves del objeto

console.log(Object.keys(add));

//2. Object.values()

//Devolver un array con los valores del objeto
console.log(Object.values(add));

//3. Object.entries()
//devuelve un array de pares [clave, valor].

console.log(Object.entries(add));

//4. Object.assign()
//Copia las propiedades de un objeto a otro

const copiaObjecto = Object.assign(add);
console.log(copiaObjecto);

//5. Object.freeze()
//Evita que el objeto pueda ser modificado

Object.freeze(add);

//6. Object.seal()
//Permitir modificar propieddes existentes pero no agregar o eliminar

Object.seal(add);

//Nota adicional
let personaArray = Object.values(add);
console.log(personaArray);

let personaString = JSON.stringify(add);
//NOtacion convierte en cadena, stringify es convertir en cadena las propiedades
//del objeto
console.log(personaString);


