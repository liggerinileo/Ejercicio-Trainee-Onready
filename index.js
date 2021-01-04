"use strict";

const autos = [
    {
        marca: "Peugeot",
        modelo: "206",
        puertas: 4,
        precio: "200000.00",
    },
    {
        marca: "Peugeot",
        modelo: "208",
        puertas: 5,
        precio: "250000.00",
    }
]

const motos = [
    {
        marca: "Honda",
        modelo: "Titan",
        cilindrada: "125cc",
        precio: "60000.00",
    },
    {
        marca: "Yamaha",
        modelo: "YBR",
        cilindrada: "160cc",
        precio: "80500.50",
    }
]

/** -------------------- PRECIOS -------------------------- */
//Precio auto 1
let precioA1 = parseFloat(autos[0].precio);
//Precio auto 2
let precioA2 = parseFloat(autos[1].precio);
//Precio moto 1
let precioM1 = parseFloat(motos[0].precio);
//Precio moto 2
let precioM2 = parseFloat(motos[1].precio);

const precioMasAlto = () => {
    let precioAlto = precioA1;

    if (precioAlto < precioA2) {
        precioAlto = precioA2;
    }
    if (precioAlto < precioM1) {
        precioAlto = precioM1;
    }
    if (precioAlto < precioM2) {
        precioAlto = precioM2;
    }

    return precioAlto;
}

const precioMasBajo = () => {
    let precioBajo = precioA1;

    if (precioBajo > precioA2) {
        precioBajo = precioA2;
    }
    if (precioBajo > precioM1) {
        precioBajo = precioM1;
    }
    if (precioBajo > precioM2) {
        precioBajo = precioM2;
    }

    return precioBajo;
}

/** -------------------- MODELOS -------------------------- */
//Modelo auto 1
let modeloA1 = autos[0].modelo;
//Modelo auto 2
let modeloA2 = autos[1].modelo;
//Modelo moto 1
let modeloM1 = motos[0].modelo;
//Modelo moto 2
let modeloM2 = motos[1].modelo;

const contieneLetra = y => {
    let modelo;

    if (modeloA1.indexOf(y) !== -1) {
        modelo = modeloA1;
    }
    if (modeloA2.indexOf(y) !== -1) {
        modelo = modeloA2;
    }
    if (modeloM1.indexOf(y) !== -1) {
        modelo = modeloM1;
    }
    if (modeloM2.indexOf(y) !== -1) {
        modelo = modeloM2;
    }
    
    return modelo;
}  

/** ------------------ IMPRIMIR POR CONSOLA --------------------- */
console.log(`Marca: ${autos[0].marca} // Modelo: ${autos[0].modelo} // Puertas: ${autos[0].puertas} // Precio: $${autos[0].precio}`);
console.log(`Marca: ${motos[0].marca} // Modelo: ${motos[0].modelo} // Puertas: ${motos[0].cilindrada} // Precio: $${motos[0].precio}`);
console.log(`Marca: ${autos[1].marca} // Modelo: ${autos[1].modelo} // Puertas: ${autos[1].puertas} // Precio: $${autos[1].precio}`);
console.log(`Marca: ${motos[1].marca} // Modelo: ${motos[1].modelo} // Cilindrada: ${motos[1].cilindrada} // Precio: $${motos[1].precio}`);

console.log("=============================");

//Vehiculo mas caro
if (precioMasAlto() === precioA1) {
    console.log(`Vehiculo mas caro: ${autos[0].marca} ${autos[0].modelo}`);
} else if (precioMasAlto() === precioA2) {
    console.log(`Vehiculo mas caro: ${autos[1].marca} ${autos[1].modelo}`);
} else if (precioMasAlto() === precioM1) {
    console.log(`Vehiculo mas caro: ${motos[0].marca} ${motos[0].modelo}`);
} else if (precioMasAlto() === precioM2) {
    console.log(`Vehiculo mas caro: ${motos[1].marca} ${motos[1].modelo}`);
}

//Vehiculo mas barato
if (precioMasBajo() === precioA1) {
    console.log(`Vehiculo mas barato: ${autos[0].marca} ${autos[0].modelo}`);
} else if (precioMasBajo() === precioA2) {
    console.log(`Vehiculo mas barato: ${autos[1].marca} ${autos[1].modelo}`);
} else if (precioMasBajo() === precioM1) {
    console.log(`Vehiculo mas barato: ${motos[0].marca} ${motos[0].modelo}`);
} else if (precioMasBajo() === precioM2) {
    console.log(`Vehiculo mas barato: ${motos[1].marca} ${motos[1].modelo}`);
}

//Vehiculo modelo letra Y
if (contieneLetra("Y") === modeloA1) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${autos[0].marca} ${autos[0].modelo} ${autos[0].precio}`);
} else if (contieneLetra("Y") === modeloA2) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${autos[1].marca} ${autos[1].modelo} ${autos[1].precio}`);
} else if (contieneLetra("Y") === modeloM1) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${motos[0].marca} ${motos[0].modelo} ${motos[0].precio}`);
} else if (contieneLetra("Y") === modeloM2) {
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${motos[1].marca} ${motos[1].modelo} ${motos[1].precio}`);
}

console.log("=============================");

