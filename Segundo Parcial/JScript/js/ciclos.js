/*Ciclos */

//For
const heroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitan America"];

console.log(heroes);
console.log("For tradicional");
for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

//Itera propieddes de un objeto o los indices de un arreglo
console.log("***** For in *****");
for(let i in heroes){
    console.log(heroes[i]);
}

//Itera valores directamente de in iterable (array, cadenas, etc......)
console.log("***** For of *****");
for(let heroe of heroes){
    console.log(heroe);
}

//1.-Se usa for tradicional o clasico cuando se necesite el control total del indice
//2.-Usa for....in para iterar las propiedades de un objeto
//3.-for...of para iterar los valores de n iterable(Array, cadenas de texto(string)
//, map, set, nodelist, etc...)

//continue, break

for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        continue;//ir a la siguiente iteracion
        //break; rompe el ciclo o sale del bucle
    }
    console.log(contador);
    
}

//while
const carros=["Mazda ", "Audi", "Ferrari", "BMW"];
let i = 0;
/* 
while(i < carros.length){
    console.log(carros[i]);
    i++;
}*/

console.log("Usando continue");

while(carros[i]){
    if(i == 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}





