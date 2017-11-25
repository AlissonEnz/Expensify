const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ name: 'Alisson', age: 24 });
    reject('Error');
  }, 1500);
});

console.log("Before");

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log("After");
