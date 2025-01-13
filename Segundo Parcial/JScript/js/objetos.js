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

//Metodos get en Objetos JS
//mejores practicas para acceder y modificar objetos
//Acceder a los valores de las propiedades

let personaGet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    edad: 50,
    get nombreCompleto (){ //No es una propiedad ahora es un metodo get
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

//Metodo set en obbjetos de JavaScript
//Set establece o modifica los valores de los atributos de los objetos

//validacion

let personaSet = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet.lang);

//Set

let personaSet2 = {
    nombre: 'Marco',
    apellido: 'Valdiviezo',
    email: 'mvaldiviezo@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(idioma){
        this.idioma = idioma;
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(personaSet2.lang);

personaSet2.lang = 'en';

console.log(personaSet2.lang);

//Constructores en JavaScript

//Si se desea crear mas objetos del mismo tipo no es posible
//Por esta razon se crean constructores

//Es una funcion especial que permite trabajar con Objetos en JS

//funcion constructora de tipo persona

function PersonaFC(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new PersonaFC('Juan','Sanchez','jsanchez@gmail.com'); //variable es ahora un metodo que permite crear objetos de tipo persona
console.log(padre);

padre.tel = '22334455';
console.log(padre);

let madre = new PersonaFC('Laura','Moya','lmoya@email.com');
console.log(madre);

//Agregarmetodos a una funcion constructora

function PersonaFCM(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre1 = new PersonaFCM('Juan','Sanchez','jsanchez@gmail.com');

console.log(padre1.nombreCompleto());

let madreFCM = new PersonaFCM('Laura','Moya','lmoya@gmail.com');

console.log(madreFCM.nombreCompleto());

//uso de prototype

PersonaFCM.prototype.tel = '123456789';

console.log(madreFCM.tel);

//Uso del metodo Call

let personaC1 = {
    nombre: 'Diego',
    apellido: 'Cajas',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let personaC2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

//Para usar el metodo nombreCompleto que pertenece al objeto personaC1
//con los datos del Objeto personaC2

console.log(personaC1.nombreCompleto());
console.log(personaC1.nombreCompleto.call(personaC2));

//pasar argumentos o parametros a call

let personaCP1 = {
    nombre: 'Diego',
    apellido: 'Cajas',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let personaCP2 = {
    nombre: 'Andres',
    apellido: 'Farias'
}

console.log(personaCP1.nombreCompleto('Lic', '22334455'));
console.log(personaCP1.nombreCompleto.call(personaCP2, 'Ing', '22334455'));





