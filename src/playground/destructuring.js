// Object

// const person = {
//   name: "Alisson",
//   age: 24,
//   location: {
//     city: "Maringa",
//     temp: 26
//   }
// };
//
// const { name: firstName = "Anonymous", age } = person;
// // const name = person.name;
// console.log(`${firstName} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}`);
// }
// const book = {
//   title: "Ego is the Enemy",
//   author: "Tyan Holiday",
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = "Self-Published"} = book.publisher;
//
// console.log(publisherName);

// Array

// const address = ["267 Diva Nadir", 'Apucarana', "PR", "86802"];
// const [, city, state] = address;
// console.log(`${city}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
