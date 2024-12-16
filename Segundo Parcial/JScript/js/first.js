let nombre;
let edad;
let altura;
nombre="Juan";
edad=20;
altura=1.80;

console.log("El nombre de la persona es: "+ nombre);
console.log("La edad de la persona es: "+ edad);
console.log("La altura de la persona es: "+ altura);


//var para una variable global
//let para declarar una variable local o tambien una variable de bloque
//const declara una variable constante, es decir, su valor no va a cambiar

//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//switch marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//for marca una condicion de instrucciones que se ejecutan varias veces
//while marca una condicion de instrucciones que se ejecutan varias veces

//function marca un bloque de instrucciones que se ejecutan cuando se llama
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando una condicion se cumple, ademas de retornar un valor

/*Tipos de datos de Javascript */
//Tipo de datos string
let nombre1 = "Juan";
console.log(nombre);

//Tipo de dato numerico
let edad1 = 20;
console.log(edad1);

//Tipo de dato Objeto object
let objeto = {
    nombre2: "Juan",
    edad2: 20,
    altura2: 1.80
}
console.log(objeto);

//Tipo de dato Typeof
let var1 = "Juan";
let var2 = false;
let var3 = BigInt(123);
let var4 = [1,2,3];

console.log(var1);
console.log("Tipo de dato: "+ typeof var1);
console.log(var2);
console.log("Tipo de dato: "+ typeof var2);
console.log(var3);
console.log("Tipo de dato: "+ typeof var3);
console.log(var4);
console.log("Tipo de dato: "+ typeof var4);

//Tipo de dato boolean(true, false)
let bandera = true;
console.log(bandera);
console.log("Tipo de dato: "+ typeof bandera)

//Tipo function
function saludar(){}
console.log(saludar);
console.log("Tipo de dato: "+ typeof saludar);

//Tipo symbol
let simbolo = Symbol();
console.log(simbolo);
console.log("Tipo de dato: "+ typeof simbolo);

//Tipo clase es una funcion
class Persona{
    constructor(nombre3, apellido3){ //atributos constructor
    this.nombre3 = nombre3; //propiedades
    this.apellido3 = apellido3;
    }
}

let persona = new Persona("Pedro","Perez");
console.log(persona);
console.log("Tipo de dato: "+ typeof persona);

//Tipo undefined
let variable;
console.log(variable);
console.log("Tipo de dato: "+ typeof variable);

//Tipo de dato null
let variable1 = null;
console.log(variable1);
console.log("Tipo de dato: "+ typeof variable1);

//Tipo de datos de tipo arreglo en JavaScript
let mascotas = ["Perro","Gato", "Araña"];
console.log(mascotas);
console.log("Tipo de dato: "+ typeof mascotas);

//Tipo de datos con cadenas vacias
let variable2 = '';
console.log(variable2);
console.log("Tipo de dato: "+ typeof variable2);

//Reglas de nombres de variabes en JavaScript
let nombreCompleta;
let noombrecompleta; //mala practica

//Formas correctas de declarar una variable
let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;

//Formas incorrectas de crear una variable
//let 1nombreCOmpleto;
//let #nombreCompleto;
//let %nombreCOmpleto;
//No está permitido ingresar estos tipos de variables

//Operadores aritmeticos
//Suma
let x = 10;
let y = 5;
let z = x + y;
console.log(z)

//Resta
let x1 = 10;
let y1 = 5;
let z1 = x - y;
console.log(z1)

//Multiplicacion
let x2 = 10;
let y2 = 5;
let z2 = x * y;
console.log(z2)

//Modulo o residuo
let x4 = 10;
let y4 = 5;
let z4 = x % y;
console.log(z4)

//Incremento

//Pre-incremento
let a = 7;
let x5 = 9;
x5 = ++a;
console.log(a);
console.log(x5);

//Post-incremento
let a1 = 7;
let x6 = 9;
x6 = a1++;
console.log(a1);
console.log(x6);

//Decremento

//Pre-decremento
let a2 = 7;
let x7 = 9;
x7 = --a2;
console.log(a2);
console.log(x7);

//Post-decremento
let a3 = 7;
let x8 = 9;
x8 = a3--;
console.log(a3);
console.log(x8);

//Operadores de comparacion
/*
Igual ==
No igual !=
Mayor que >
Menor que <
Mayor o igual que >=
Menor o igual que <=
*/

let l = 10;
let f = 5;
let c = l == f;
let d = l != f;
let e = l > f;
let f1 = l < f;
let g = l >= f;
let h = l <= f;

let comparacion1 = 10;
let comparacion2 = 5;

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

console.log(c);
console.log(d);
console.log(e);
console.log(f1);
console.log(g);
console.log(h);

//Precedencia de operadores
/*
1. ()
2. **
3. * /
4. + -
5 ++ --
*/

let a4 = 6, b1 = 7, c1 = 8;
let dato = (a4 + b1) * c1;
console.log(dato);

let a5 = 6, b2 = 7, c2 = 8, d2 = 9;
let dato2 = a5 * (b2 + c2);
console.log(dato2);

let dato3 = a5 * b2 + c2 / d2;
console.log(dato3);

//Operadores de asignacion
/*
Asignacion = =
SUma y asignacion +=
Resta y asignacion -=
Multiplicacion y asignacion *=
Division y asignacion /=
*/

let a6 = 3;
let valorD = 3;

a6+=3;//a6 = a6 + 3
console.log(a6);

valorD-=3;//a = a - 3
console.log(valorD);

//Determinar si un numero es par o impar
let numero = 10;
if(numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

//Determinar si una persona es mayor o no de edad
let edad3 = 14;
if(edad3 > 0){
if(edad3 >= 18){
    console.log("La persona es mayor de edad");
}else{
    console.log("La persona es menor de edad");
}
}else{
    console.log("Esa no es una edad xddddd");
}

//Operador AND &&

let s = 12;
let valMin = 12; valorMax = 10;

if(s >= valMin && s <= valorMax){
    console.log("El valor esta dentro del rango");
}else{
    console.log("EL valor esta fuera del rango");
}

//Operador OR ||

if(s == valMin || s == valorMax){
    console.log("El valor es igual");
}else{
    console.log("EL valor no es igual");
}

//Operadores ternarios
let s1 = 110;

let valmin = 100;
let valmax = 150;

let resultado = (s >= valmin && s <= valmax) ? "El valor es minimo" : "El valor es maximo";

//Conversion

let minumero = "10";

console.log(typeof minumero);

let edad4 = parseInt(minumero);
let edad5 = Number(minumero);

if(edad4 >= 18){
    console.log("Puede votar");
}else{
    console.log("no puede votar");
    
}

//parseint: convierte un valor en numero entero
//NUmber: convierte un valor en un numero (puede ser entero o flotante)

console.log(parseInt("42px")); // 42 solo la parte numerica
console.log(parseInt(3.1415)); //3 (convierte solo la parte entera)
console.log(parseInt("abc")); // existe un valor numero para convertir 

console.log(Number("42px")); //no se puede convertir toda la cadena
console.log(Number(3.1415)); //convierte el numero en un flotante
console.log(Number("abc")); //no hya numero en la cadena

console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN











