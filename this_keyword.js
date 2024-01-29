// this in global space - window
"use strict"
console.log(this);


// Inside Function



function x(){

    // Gives window object due to this substitution -if used strict mode then its undefined
    console.log(this) 
}
x();

// Depends how the func is called

window.x(); // -gives window again


// This inside object


// Inside object this is the object itself
const obj = {
    a: 10,
    x : function(){
        console.log(this);
    }
}
obj.x();



// Call bind Apply 


const student1 = {
    name: "Akash",
    printName: function(){
        console.log(this.name);
    }
}

// This will print Akash
student1.printName();


// Now how do we use call? 

// We have another student , but no print here

const student2 = {
    name: "Raj"
}

student1.printName.call(student2);


// This inside Arroe func - It do not have their own this
// It takes the this of lexical env 

const objA = {
    b : 10, 
    c: ()=>{console.log(this)}
}

objA.c(); // Prints window as the lexical env of the arrow func is window

// But if arrow is inside another function

const objB = {
    b : "ObjectB ", 
    c: function (){
        const y = ()=>{console.log(this)}
        y();
    }
}

objB.c(); // This prints the object B 
//As lexical env of y is function and value of this in function inside obj is theobj itself