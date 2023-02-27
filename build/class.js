"use strict";
class Car {
    constructor(color, harga, brand) {
        this.color = color;
        this.getBrand = () => {
            return this.brand;
        };
        this.price = harga;
        this.brand = brand;
    }
    setBrand(value) {
        if (value == "Genesis") {
            this.brand = "Mobil mewah dari hyundai";
        }
        else {
            this.brand = value;
        }
    }
}
class SportCar extends Car {
    constructor() {
        super(...arguments);
        this.electricCar = true;
        this.hybrid = false;
    }
}
let ioniq5 = new SportCar('silver', 800000000, 'hyundai');
ioniq5.setBrand("Genesis");
console.log(ioniq5);
