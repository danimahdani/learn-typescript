"use strict";
function tampilkanNamaku(nama) {
    return `${nama}`;
}
console.log(tampilkanNamaku("Namaku Udin"));
const tampilkanUmurku = (umur) => {
    return umur;
};
console.log(tampilkanUmurku(26));
function printAku() {
    console.log('tampilkan diriku');
}
printAku();
const Kalkulator = (no1, no2) => {
    return no1 + no2;
};
console.log(Kalkulator(10, 20));
const fullName = (firstName, lastName = "Namaku") => {
    return firstName + " " + lastName;
};
console.log(fullName("dani", "mahdani"));
