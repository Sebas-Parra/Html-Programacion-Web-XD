function calcularPromedio(a, b, c){
    if(typeof a === 'number' && typeof b === 'number' && typeof c === 'number'){
    return (a+b+c)/3;
    }
    else{
        console.log("Alguno de los aprametros no es un numero");
    }
}

const determinarMayor = function(a, b){if(typeof a === 'number' && typeof b === 'number'){  return a > b ? a : b} else{
    console.log("Alguno de los aprametros no es un numero");
}}

const esPar = (a) => a % 2 == 0 && typeof a === 'number' ? true : false;

(function(){
    console.log(calcularPromedio(18, '', 13));
    console.log(determinarMayor(12,13));
    console.log(esPar(4));
})();
