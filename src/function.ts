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


//type as function

type Penjumlahan = (angkasatu: number, angkadua: number) => number

const Kalkulator: Penjumlahan = (no1: number, no2: number): number => {
  return no1 + no2
}

console.log(Kalkulator(10,20));

