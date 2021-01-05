import { Vehicle } from "./Vehicle.js";

export default class Motorcycle extends Vehicle {

    constructor(brand, model, cc, price){
        super(brand, model, price)
        this.cc = cc;
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

    getCc(){
        return this.c;
    }

    getData(){
        return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.cc} // Precio: $${this.price}`
    }

}