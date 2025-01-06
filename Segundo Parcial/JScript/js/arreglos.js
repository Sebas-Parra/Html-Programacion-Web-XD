/**************************************************************** 
                        ARREGLOS
*****************************************************************/

//Formas de declarar un arreglo

const array = [1,2,3,4,5];
const array1 = new Array(1,2,3,4,5);
const array2 = Array.of(1,2,3,4,5);

let numeros = [1,2,3,4,5];
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Negro"];
let vacio = [];
let conjunto = [{nombre: "Ricardo", apellido: "Vargas"}, {color: "Rojo"}]

let videoJuegos = [
    "Super Mario Bros",
    "The legend of Zelda",
    "Final Fantasy",
    "DOnkey KOng"
]

console.log(videoJuegos[3]);

let arreglosCosas = [
    true,
    123,
    "Hola",
    function(){},
    ()=>{},
    {a:1},
    ["Hola", "mundo"]
];

console.log({arreglosCosas});
console.log(arreglosCosas[3]);

//map, filter y el reduce

//son metodos funcionales que se pueden usar para recorrer
//y ademas transformar los datos de un arreglo

//map 
//transforma los datos de un arreglo

let numeros1 = [1,2,3,4,5];
let cuadrados = numeros1.map(num => num * num);
console.log({cuadrados});

//filter
//filtra los datos de un arreglo

let numerosPares = [1,2,3,4,5];
let pares = numerosPares.filter(num => num % 2 == 0);
console.log({pares});


//reduce
//Reduce los datos de un arreglo

let numerosReduce = [1,2,3,4,5];
let maximo = numerosReduce.reduce((acumulador, num) => num > acumulador ? num : acumulador, numerosReduce[0]);
console.log(maximo);

//ventajas:
/*Son ideales para trabajar con transformaciones y manipulaciones complejas */
//permiten un estilo de programacion funcional mas limpio y facil de usar

//Agregar nuevos elementos 

//push() agregar uno o mas elementos al final de un array

let agregar = [1, 2, 3];
agregar.push(4);//Agrega el numero 4 al final del array
console.log(agregar);

let a = ['uno','dos','tres'];
a.push('cuatro');
console.log(a);

//unshift() agrega uno o mas elementos al principio del array
let add = [1, 2, 3];
add.unshift(0); //Agrega el 0 al principio
console.log(add);

//splice() puede agregar o eliminar elemtnos de cualquier parte dentro del array
//Este método es muy versatil

let z = [1, 2, 3];
z.splice(1,0,4); //Se agrega el numero 4 en la posicion 1 sin eliminar los elementos
console.log(z);

//Modificar elementos dentro de un array

//Se puede modificar los elementos directamente
//a traves de su indice y modificarlo

let m = [1, 2, 3];
m[1] = 5;
console.log(m);

//Si deseamos modificar el arreglo de forma mutable, se puede
//utilizar el metodo map()
//para crear un nuevo arreglo con los valores modificados
let num;
let modificar = [1, 2, 3];
let nuevoModificado = modificar.map(num => num === 2 ? 5 : num); //cambia el valor 2 por el 5
console.log(nuevoModificado);


//Eliminar elementos dentro de un array
//pop() elimina el ultimo elemento del arreglo
let e = [1, 2, 3];
e.pop();
console.log(e);

//shift() eliminar el primer elemtno de un array
let num1 = [1, 2, 3];
num1.shift();
console.log(num1);

//splice() para poder eliminar elementos en cualquier posicion
let s = [1, 2, 3];
s.splice(1, 1);
console.log(s);










