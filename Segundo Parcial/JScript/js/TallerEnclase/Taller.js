function calcularPromedio(a, b, c){
    return (a+b+c)/3;
}

const determinarMayor = function(a, b){return a > b ? a : b}

const esPar = (a) => a % 2 == 0 ? true : false;

(function(){
    console.log(calcularPromedio(18, 20, 13));
    console.log(determinarMayor(12,13));
    console.log(esPar(4));
})();
