let arr = [1,2,3,4,5]
let obj = {...arr}

console.log(obj)

// Output - {
//   0: 1,
//   1: 2,
//   2: 3,
//   3: 4,
//   4: 5
// }
// ----------------------------------------------------------------------------------------------------------
let obj = {0:1,1:2,2:3,3:4,4:5}
let arr = [...obj]
console.log(arr)

// Object is not iterable


// ---------------------------------------------------------------------------------------------------------

const promise = new Promise((res,rej)=>res(2));

promise.then((v)=>{
	console.log(v); // 2
  return v * 2;
}).then((v)=>{

	console.log(v); //4
  return v * 2
}).finally((v)=>{
	console.log(v); // undefined
  return 0; /// This Returned value does not even effect the substittion
}).then((v)=>{
	console.log(v); // 8
  return v * 2
})

/* 
The finally block is executed with undefined because it doesn't receive any value from the preceding promise fulfillment. It's purely for cleanup or final operations. console.log(v) prints undefined. */


// -----------------------------------------------------------------------------------------------------------------


promise
  .then((v) => {
    console.log(v); // 2
    return v * 2;
  })
  .then((v) => {
    console.log(v); // 4
    return v * 2;
  })
  .catch((v) => {
    console.log(v); // This will not execute, as there is no rejection
    return 0;
  })
  .then((v) => {
    console.log(v); // 8
    return v * 2;
  })
  .then((v) => {
    console.log(v); // 16
  });

// --------------------------------------------------------------------IMPORTNT


//   const promise = new Promise((res, rej) => res(2));

// promise
//   .then((v) => {
//     console.log(v); // 2
//     return v * 2;
//   })
//   .then((v) => {
//     console.log(v); // 4
//     return v * 2;
//   })
//   .finally(() => {
//     console.log("Finally block executed");
//     // This block does not receive any value, and it does not affect subsequent .then or .catch
//   })
//   .then((v) => {
//     console.log(v); // 8
//     return v * 2;
//   })
//   .catch((error) => {
//     console.error(error); // This will not execute because there is no rejection
//   });


// ----------------------------------------------------------------------------------


const arr = [3,4,5,6]
arr.foo = "Hi"  // Sets a new key with value Hi, If Foo is a function It will have the key but not the value
for(let i in arr){
console.log(i) // "0" "1" "2" "3" "foo"
}

for (let i of arr){
	console.log(i) // 3 4 5 6 "Hi"
}

// ------------------------------------------------------------------------------------------


class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  Dog.prototype.bark = function(age) {
    console.log("Woof I am " + this.name + " "+ age)
  }
  
  
  const pet = new Dog("Akash")
  pet.bark(45);
  
  
  delete Dog.prototype.bark
  
  
  delete pet
  
  console.log(pet) // This will still log as delete the Dog or pet will only remove the refrence 
  // and will be there in memory until it is garbage collected

  // ------------------------------------------------------------------------------------------------------


  function giveOnePizza(){
	return "Pizza";
}

const giveOneChocolate = ()=>{
	return "Chocolate";
}


// __proto__ and prototype is different
console.log(giveOnePizza.prototype) // {} constructor itself - as its empty constructor 
console.log(giveOneChocolate.prototype) // undef as it do not have its own this



