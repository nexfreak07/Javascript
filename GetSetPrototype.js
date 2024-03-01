// Set Prototype


const animal = {
    speak() {
      console.log(this.sound);
    }
  };
  
  const dog = {
    sound: 'Woof'
  };
  
  Object.setPrototypeOf(dog, animal);
  
  dog.speak(); // Outputs: Woof


  const proto = Object.getPrototypeOf(dog)
  
  console.log(proto)



  // -----------------------------------------------------------------------------

  class Animal {
    constructor(name) {
      this.name = name;
    }
    speak(){ // Class unctions are like this
        console.log("Hi "+this.sound);
    }
  }
  
  
  const dog = new Animal("Zoro");
  
  dog.sound = "woof"; // Always set property like this
  
  Object.setPrototypeOf(dog, new Animal()); // Both here should be an object
  
  dog.speak();
  

  // Object.create

  const object1 = {name : "Akash"}
const anotherObject = Object.create(object1);
console.log(anotherObject.name) // Will have all the property of object if created by Object.create  
  