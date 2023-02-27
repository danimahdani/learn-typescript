class Car {

  public price: number
  brand: string;

  constructor(public color: string, harga: number, brand: string) {
    this.price = harga
    this.brand = brand
  }

  setBrand(value: string): void {
    if(value == "Genesis") {
      this.brand = "Mobil mewah dari hyundai"
    } else {
      this.brand = value
    }
  }

  getBrand = (): string => {
    return this.brand;
  }
}

class SportCar extends Car {
    electricCar: boolean = true
    hybrid: boolean = false
}

let ioniq5 = new SportCar('silver', 800_000_000, 'hyundai');
ioniq5.setBrand("Genesis")
console.log(ioniq5);




