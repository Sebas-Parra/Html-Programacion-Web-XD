class Conductor {
    #nombre;
    #licencia;
    constructor(nombre, licencia) {
        this.#nombre = nombre;
        this.#licencia = licencia;
        this.rutas = [];
    }

    registrarRuta(ruta, distancia, tiempo){
        const nuevaRuta = {
            ruta,
            distancia,
            tiempo
        }
        this.rutas.push(nuevaRuta);
    }

    // Método para obtener el nombre del conductor
    getNombre() {
        return this.#nombre;
    }
}

class Vehiculo {
    constructor(modelo, marca){
        this.modelo = modelo;
        this.marca = marca;
    }
}

class ConductorVIP extends Conductor{
    vehiculoPreferido;
    constructor(nombre, licencia, vehiculoPreferido){
        super(nombre, licencia);
        this.vehiculoPreferido = vehiculoPreferido;
    }

    asignarVehiculoPreferido(vehiculo){
        console.log(`El conductor VIP ${this.getNombre()} ha sido asignado al vehiculo ${this.vehiculoPreferido}`);
    }
}


// Ejemplo de uso
const conductorVIP = new ConductorVIP("Ana", "1234-5678", "SUV");
const vehiculo = new Vehiculo("Model X", "Tesla");
conductorVIP.asignarVehiculoPreferido(vehiculo);

conductorVIP.registrarRuta("Ruta 1", 10, "30 min");
console.log(conductorVIP);