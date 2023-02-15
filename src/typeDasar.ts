let firstName: string = "dani"
firstName = "mahdani"

const namaBuah:string[] = ["buah naga", "apel", "pisang"]

let nomorkamu: number = 123
nomorkamu = 44

let isShow: boolean;
isShow = true
isShow = false

const enum Album {
  JimmyEatWorldFutures = 1,
  TubRingZooHypothesis = 2,
  DogFashionDiscoAdultery = 3,
}
 
const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log("That is a great choice.");
}

interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = { firstName: "Jane", lastName: "User" };
console.log(greeter(user));

let arrayNumber: Number[];
arrayNumber = [1,2,3,4]

let arrayString: String[];
arrayString = ["asd","qwe","zxc"]

let arrayAny: any[];
arrayAny = ["asd","qwe","zxc", 123, true, false]

//tuple array

let biodata: [string, number];
biodata = ["Palemabang", 123]
console.log(biodata)


//union type
let number: number | string;
number = "123"
number = 123;
// number = true;