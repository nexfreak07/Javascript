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



/*

Interview questions on prototypal inheritance in JavaScript often aim to assess your understanding of how prototypes work, how objects inherit properties and methods, and how you can manipulate prototypes to achieve certain behaviors. Here are some common interview questions on prototypal inheritance along with example answers:

1. What is prototypal inheritance in JavaScript?
Answer: Prototypal inheritance in JavaScript refers to the ability of objects to inherit properties and methods from other objects. Each object has a prototype from which it inherits properties. When a property is accessed on an object and that property is not found on the object itself, JavaScript looks up the prototype chain until it finds the property or reaches the end of the chain (where the prototype is null).

2. How does prototypal inheritance differ from classical inheritance?
Answer: Prototypal inheritance is based on prototypes and objects, where objects inherit directly from other objects. Classical inheritance, found in languages like Java and C++, involves classes and instances, where instances are created from classes. In JavaScript, you can create objects directly from other objects, and inheritance is achieved through the prototype chain.

3. How do you create and use prototypes in JavaScript?
Answer: Prototypes in JavaScript are created automatically when you define a constructor function. You can add properties and methods to a constructor's prototype property, and those properties and methods will be inherited by all instances created with that constructor. For example:

javascript
Copy code
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John");
john.sayHello(); // Outputs: Hello, my name is John
4. Explain the prototype chain in JavaScript.
Answer: The prototype chain is a series of objects linked together through their prototypes. When a property is accessed on an object, JavaScript first checks if the object itself has that property. If not, it looks at the object's prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain (where the prototype is null).

5. How do you check if an object has a property?
Answer: You can check if an object has a property using the hasOwnProperty method or by simply accessing the property. hasOwnProperty checks if the property is defined directly on the object and not inherited from its prototype chain. For example:

javascript
Copy code
const obj = { name: "John" };

console.log(obj.hasOwnProperty("name")); // Outputs: true
console.log(obj.hasOwnProperty("toString")); // Outputs: false (inherited from Object.prototype)
6. What is the difference between __proto__ and prototype?
Answer:

__proto__ is an actual object property that is used to access an object's prototype.
prototype is a property of constructor functions and is used to define properties and methods that will be inherited by instances created with that constructor.
7. How do you set up inheritance in JavaScript?
Answer: In JavaScript, you can set up inheritance by assigning an object's prototype to another object. This is typically done by using the Object.create() method or by directly manipulating the prototype property of constructor functions. For example:

javascript
Copy code
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log("Hi, my name is " + this.name);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const myDog = new Dog("Buddy", "Labrador");
myDog.speak(); // Outputs: Hi, my name is Buddy
8. What is the purpose of the constructor property in a prototype?
Answer: The constructor property points back to the constructor function that created the instance. It is used to establish the inheritance chain and to create new instances of the same type. When you set up inheritance manually, it's important to set the constructor property back to the correct constructor function to maintain the integrity of the prototype chain.

9. How can you add a method to all instances of a constructor function?
Answer: You can add a method to all instances of a constructor function by adding it to the constructor's prototype. For example:

javascript
Copy code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.drive = function() {
  console.log("Driving a " + this.make + " " + this.model);
};

const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Outputs: Driving a Toyota Camry
These questions cover a range of topics related to prototypal inheritance in JavaScript, from basic concepts to more advanced usage and implementation. It's essential to have a solid understanding of how prototypes work in JavaScript, as they are fundamental to the language's object-oriented design.







*/