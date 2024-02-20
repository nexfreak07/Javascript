// Do it in JS Fiddle

const myName = {
	fistName : "Akash",
  lastName : "Dasgupta"
}

const printFullName = function(age){
	 return this.fistName + " " + this.lastName + " " + age}

const res1 = printFullName.apply(myName, [25]);
console.log(res1)


const res2 = printFullName.call(myName, 25)

console.log(res2)

// Bind Always Returns a New Function

const newFunc = printFullName.bind(myName, 25);
const res3 = newFunc();

console.log(res3)
