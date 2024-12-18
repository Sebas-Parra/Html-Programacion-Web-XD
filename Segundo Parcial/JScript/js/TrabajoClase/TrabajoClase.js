let estudiante1 = 
    {nombre: "Deivid Yepez",
        notas: [15,17,19],
        promedio:0
    };

let estudiante2 = {
    nombre: "Mateo Garcia",
    notas: [19,19,20],
    promedio:0
}

let estudiante3 = {
    nombre: "David Cepeda",
    notas: [12,16,18],
    promedio:0
}

let estudiante4 = {
    nombre: "Juan Perez",
    notas: [10,11,9],
    promedio:0
}

let estudiante5 = {
    nombre: "Napoleon Perez",
    notas: [20,20,20],
    promedio:0
}

let estudiante6 = {
    nombre: "Renata Alvarez",
    notas: [10,10,10],
    promedio:0
}

let estudiante7 = {
    nombre: "Jefferson Gutierrez",
    notas: [8,6,2],
    promedio:0
}

let estudiante8 = {
    nombre: "JUana Lupe",
    notas: [10,20,20],
    promedio: 0
}

let estudiante9 = {
    nombre: "Andrea Moran",
    notas: [20,20,15],
    promedio:0
}

let estudiante10 = {
    nombre: "JUlieta Verdesoto",
    notas: [5,20,20],
    promedio:0
}

let estudiantes = [estudiante1,estudiante2,estudiante3,estudiante4,estudiante5,estudiante6,estudiante7
    ,estudiante8,estudiante9,estudiante10
]

let clasificacion;
let notas = [];
let prom = 0;
let promedio;
let suma = 0;

for(let estudiante of estudiantes){
    for(let est of estudiante.notas){
        estudiante.promedio += est;
    }
    estudiante.promedio = estudiante.promedio/3;
    if(estudiante.promedio >= 16){
        clasificacion = "Exclente";
    }else if(estudiante.promedio >= 12 && estudiante.promedio < 16){
        clasificacion = "Bueno";
    }else if (estudiante.promedio >= 8 && estudiante.promedio < 12){
        clasificacion = "Aprobado";
    }else if(estudiante.promedio < 8 && estudiante.promedio > 0){
        clasificacion = "Reprobado"
    }
console.log(estudiante.nombre + ":");
console.log("Clasificacion: "+ clasificacion); 
console.log("Promedio: "+ estudiante.promedio);
let maximo = estudiante.notas.reduce((acumulador, num) => num > acumulador ? num : acumulador, estudiante.notas[0]);
console.log("Calificacion mas alta: "+ maximo);
let minimo = estudiante.notas.reduce((acumulador, num) => num < acumulador ? num : acumulador, estudiante.notas[0]);
console.log("-----------------------------------------------------");
}

let promActual;
let promMayor = estudiantes[0].promedio;
let promedioMenor = estudiantes[0].promedio;
let est1 = estudiantes[0];
let est2 = estudiantes[0];

for(let e of estudiantes){
    if(e.promedio < promedioMenor){
        promedioMenor = e.promedio;
        est1 = e.nombre;
    }else if(e.promedio > promMayor){
        promMayor = e.promedio;
        est2 = e.nombre;
    }
}
console.log("El promedio menor es del estudiante "+ est1 +" con: "+ promedioMenor);
console.log("El promedio mayor es del estudiante "+ est2 + " con: "+ promMayor);





