//Funciones Callback
//Son funciones que se pasan por parametros a otras funciones y
//toman un valor especial en el interior de esa funciones

//Ejemplo
const letters = ["A", "B", "C"];

function action(element, index) {
  console.log(`pos=${index} letter=${element}`);
}

// Por cada item del array, ejecuta action() la cual es la funcion callback
letters.forEach(action);

//Funcion setTimeout()
//Funcion que permite ejecutar un fragento de código despues de un tiempo
//determinado, es como una forma de establecer un temporizador

//Ejemplo
setTimeout(function(){
  console.log("Hola Mundo");
},2000)

console.log("setTimeout() Ejemplo....");

//En este codigo se ejecuta primero el console.log()
// que tiene el "setTimeout() Ejemplo...." y luego el setTimeout()

//Funcion setInterval()
//Funcion que permite ejecutar un fragmento de cogio cada cierto tiempo
//determinado repetidas veces hasta que sea borrada

//Ejemplo
let identificadorIntervaloDeTiempo;

function repetirCadaSegundo() {
  identificadorIntervaloDeTiempo = setInterval(mandarMensaje, 1000);
}

function mandarMensaje() {
  console.log("Ha pasado 1 segundo.");
}

repetirCadaSegundo();
//Al momento  de que se llame la funcion repetirCadaSegundo() se
//ejecutará la funcion mandarMensaje() cada segundo y se ira mostrando
//en la consola cada segundo

//Promesas
//Es un objeto ue representa un valor que puede estar disponible
//ahora, en el futuro o nunca
//Forma de manejar operaciones asíncronas

function hacerSolicitud(mensaje) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mensaje === "Hola") {
        resolve("Respuesta del servidor: Hola mundo");
      } else {
        reject("Error: Mensaje no reconocido");
      }
    }, 1500); // Simula un retraso de 1.5 segundos
  });
}

hacerSolicitud("Hola")
  .then((respuesta) => {
    console.log(respuesta); // "Respuesta del servidor: Hola mundo"
  })
  .catch((error) => {
    console.error(error); // "Error: Mensaje no reconocido"
  });

