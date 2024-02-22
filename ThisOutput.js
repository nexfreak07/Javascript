// Very Imp Question

function Car(make) {
    this.make = make;
    this.getMake = function(){
            console.log(this.make)
    }
    
  }
  
  /* Car.prototype.getMake = function() {
    console.log(this.make);
  }; */
  
  const car1 = new Car("Toyota");
  const car2 = {
    make: "Ford",
    getMake: car1.getMake
  };
  
  car1.getMake(); // Toyota
  car2.getMake(); // Ford

  // Question 2

  function Person(name) {
    this.name = name;
    this.getName = function() {
      console.log(this.name);
    };
  }
  
  const person1 = new Person("Alice");
  const person2 = {
    name: "Bob",
    getName: person1.getName
  };
  
  person1.getName();
  person2.getName();
  
  // -------------------------------------------------------------

  const obj = {
    a: 10,
    b: function() {
      console.log(this.a);
    }
  };
  
  const bFunc = obj.b;

  
  bFunc();
// Prints Undefined as obj.b in another fuction is attached hence it deattaches it  from obj hence in bFunc as we dont have b property its undef 


// ----------------------------------------------------------------------------------------------
const obj = {
    a: 10,
    b: function() {
      console.log(this.a);
    }
  };
  
  const c = {
    a: 20,
    b: obj.b
  };
  
  c.b();
// Prints 20

//-----------------------------------------------------------------------------------------------------IMP

const obj = {
    a: 10,
    b: function() {
      setTimeout(function() {
        console.log(this.a);
      }, 100);
    }
  };
  
  obj.b();

  
  // This will print undef to print value we need to use Arrow Func inside setTimeout(()=>{},100)

  // Reason

  //----------------------------------------------------------------------------------------------------IMP

  function Counter() {
    this.count = 0;
    setInterval(function() {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
  
  const counter = new Counter();

  // This will log NaN NaN NaN .... and so on as this.count++ here this is window and hence window.count++ is NaN
  // If we change to arrow func it will print the number
  
  //----------------------------------------------------------------------------------------------------------

  const user = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const getFullName = user.fullName; // Deattachment from user and assign in getFull Name
  console.log(getFullName()); // this is now window and no firstName No lastName hence Undef
  
  // To call it properly we need to use call()
  
  getFullName.call(user) // This will print the name
  

  // ----------------------------------------------------------------------------------------------------------------

  const obj = {
    a: 10,
    b: function() {
      setTimeout(function() {
        console.log(this.a);
      }.bind(this), 100);
    }
  };
  
  obj.b();
  
  
  // This Prints 10 as we are binding the outer this to the inner function of setTimeout 

  //--------------------------------------------------------------------------------------------------------------------

  const a = {
    b: 10,
    c: function() {
      console.log(this.b);
    }
  };
  
  const d = {
    b: 20,
    c: a.c
  };
  
  d.c();

  
  // Prints 20 as a.c is deatcahed and put in d and here this.b refers to b

  //-------------------------------------------------------------------------------------------------------------------

  const obj = {
    a: 10,
    b: function() {
      console.log(this.a);
    }
  };
  
  const bFunc = obj.b.bind({ a: 20 });
  bFunc();

  
//   bFunc is created by using the bind method on obj.b.
// The bind method is used to create a new function where this inside the function is set to the object passed to bind. In this case, { a: 20 }.
// bFunc now refers to a new function that has this bound to { a: 20 }.

// --------------------------------------------------------------------------
const a = {
    b: 10,
    c: function() {
      console.log(this.b);
    }
  };
  
  const d = {
    b: 20,
    c: a.c.bind(a)
  };
  
  d.c();
  
  // Ans is 10 as a is bound to d.c


  //---------------------------------------------------------

  const obj = {
    a: 10,
    b: {
      a: 20,
      c: function(){
        console.log(this.a);
      }
    }
  };
  
  const c = obj.b.c; // undef as deatached from obj to print we need to obj.b.c.bind(obj.b)
  c();
// ---------------------------------------------------------------------IIIIIIIIIIIIIIIIIIIMMMMMMMMMMMMMMMMMPPPPPPPPPPPPPPPPPPPPP


// TTTTTTTTTTTTTTTT IIIIIIIIIIIIIIIIIIII PPPPPPPPPPPPPPPPPPPP  - If there is outer inner or nested func theres a closure


const a = {
    b: 10,
    c: function() {
      console.log(this.b);
    }
  };
  
  const d = {
    b: 20,
    e: () => {
      a.c(); // Now here as it is under another function a closure is formed hence this is obj a and 10 is printed
      // If it is arrow func still it forms closure
    }
  };
  
  d.e();
  