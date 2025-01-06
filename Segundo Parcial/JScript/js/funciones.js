/*************************************************************
                        FUNCIONES
**************************************************************/ 

//Funciones declaradas

function miFunction(a, b){
    console.log("La suma es: " + (a + b));
}

miFunction(4,3);

//utilizar return para funciones

function retornaValor(a, b){
    return a+b;
}

let resultado = retornaValor(2, 4);
console.log(resultado);

//Funciones de tipo expresion
//Declaracion de una funcion de tipo expresion

let sumar = function(a, b) { return a + b};
resultado1 = sumar(1, 2);
console.log(resultado1);


//Funciones de tipo self-invoking
//Funciones que llaman a si mismos 
//Funciones anonimas
//Nota: se pueden utilizar estas funciones cuando se carga un programa
//no es muy comun pero se puede utilizar en ciertos casos

(function (a, b){
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

function total(x, y, z){
    console.log(arguments.length);
    return x + y + z;
}

total(1, 2, 3);

//Funciones tipo flecha en javascript (arrow function)
const multiplicar = (x, y) => x * y;
console.log(multiplicar(2,3));

const cuadrado = x => x * x;
console.log(cuadrado(4));

//Funcion anonima
//Es unas funcion sin nombre, comunmente usada como argumento para otras funciones

setTimeout(function(){
    console.log('Funcion anonima ');
}, 1000);

//Operaciones dentrode funciones flecha

const operaciones = {sumar: (a, b) => a + b, restar: (a,b)=>a-b};

console.log(operaciones.sumar?.(3,2));
console.log(operaciones.restar?.(3,2)); //undefined



