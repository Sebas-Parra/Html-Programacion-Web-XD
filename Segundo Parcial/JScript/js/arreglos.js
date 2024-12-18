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







