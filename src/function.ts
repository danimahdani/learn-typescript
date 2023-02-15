function tampilkanNamaku(nama: String) :string {
    return `${nama}`;
}

console.log(tampilkanNamaku("Namaku Udin"))

const tampilkanUmurku = (umur: number) :number => {
    return umur;
}

console.log(tampilkanUmurku(26));


function printAku(): void {
  console.log('tampilkan diriku')
}

printAku()


//function as type

type Penjumlahan = (angkasatu: number, angkadua: number) => number

const Kalkulator: Penjumlahan = (no1: number, no2: number): number => {
  return no1 + no2
}

console.log(Kalkulator(10,20));


const fullName = (firstName: string, lastName: string = "Namaku") => {
  return firstName + " " + lastName;
}

console.log(fullName("dani", "mahdani"))
