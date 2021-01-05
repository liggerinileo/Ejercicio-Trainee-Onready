"use strict";
import  Car  from "./Car.js";
import  Motorcycle  from "./Motorcycle.js";


let vehicles = [];

let car1 = new Car("Peugeot", "206", 4, "200000.00");
let mc1 = new Motorcycle("Honda", "Titan", "125cc", "60000.00");
let car2 = new Car("Peugeot", "208", 5, "250000.00");
let mc2 = new Motorcycle("Yamaha", "YBR", "160cc", "80500.50");
vehicles.push(car1, mc1, car2, mc2);

/** ------------- Print Vehicle List ---------------- */
(function () {
    vehicles.forEach(vehicle => console.log(vehicle.getData()) );
}) ();

console.log("====================================");

function comparePrices(a, b) {
    if ( parseFloat(a.price) > parseFloat(b.price) ){
      return -1;
    }
    if ( parseFloat(a.price) < parseFloat(b.price) ){
      return 1;
    }
    return 0;
}

vehicles.sort( comparePrices );

/** ------------- Print Most Expensive Vehicle ---------------- */
console.log(`Vehiculo mas caro: ${vehicles[0].getBrand()} ${vehicles[0].getModel()}`);

/** ------------- Print Cheaper Vehicle ---------------- */
console.log(`Vehiculo mas caro: ${vehicles[vehicles.length - 1].getBrand()} ${vehicles[vehicles.length - 1].getModel()}`);

/** ------------- Print Vehicle Containing Letter ---------------- */
(function () {
    vehicles.forEach(vehicle => {
        if(vehicle.model.indexOf("Y") !== -1) {
            console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehicle.getBrand()} ${vehicle.getModel()} $${vehicle.getPrice()}`);
        }
    });
}) ();

console.log("====================================");

/** ------------- Print Vehicle List By Price ---------------- */
(function () {
    console.log("Vehículos ordenados por precio de mayor a menor: ");
    vehicles.forEach(vehicle => {
        console.log(vehicle.getBrand()+" "+vehicle.getModel());
    });
}) ();

