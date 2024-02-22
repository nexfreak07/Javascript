const elephant = {
    name : "ELEPHANT",
eats : true
}

const rabbit = {
name : "RABBIT",
jumps : true
}

// Here we are setting the prototype of Rabbit to the Elephant

rabbit.__proto__ = elephant


// Below eats will be checked in rabbit obj if its found it will be printed and if not found it will
// find the property on the elephant object and print
console.log(rabbit.eats)
console.log(rabbit.name)



const Person = {
    eats : true, 
    getName : () => {
    	console.log(this.name)
    }
}

const Person1 = {
	name : "Akash",
  programmer : true
}



// Here we are setting the prototype of Rabbit to the Elephant

Person1.__proto__ = Person


// Below eats will be checked in rabbit obj if its found it will be printed and if not found it will
// find the property on the elephant object and print
console.log(Person1.eats)
Person1.getName()


// 

arr = [1,2,3,4,5]
console.log(arr.__proto__.__proto__.__proto__)

/* Prototype Chaining */

// arr.__proto__ = Array.prototype
// arr.__proto__.__proto__ = Object.prototype
// arr.__proto__.__proto__.__proto__ = null

// func.__proto__ = Function.prototype
// func.__proto__.__proto__ = Object.prototype
// func.__proto__.__proto__.__proto__ = null