import { Vehicle } from "./Vehicle.js";

export default class Car extends Vehicle {

    constructor(brand, model, doors, price){
        super(brand, model, price)
        this.doors = doors;
    }

    getBrand(){
        return this.brand;
    }

    getModel(){
        return this.model;
    }

    getPrice(){
        return this.price;
    }

    getDoors(){
        return this.doors;
    }

    getData(){
        return `Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: $${this.price}`
    }

}