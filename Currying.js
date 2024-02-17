// Currying means that you create a copy of a generic function and resue it in your way or create more function by presetting some values

// Below is a Add Function

const add = function(x, y){
    console.log(x+y);
}

// Below is Currying
const addByTwo = add.bind(this, 2);
addByTwo(4)

// The above code exactly means we are setting the value of 2 to x as a fixef value


// Below Code has made the value of Y also Fixed - This is how currying works using bind() - method
const addByTwoandFive = add.bind(this, 2, 5);
addByTwoandFive()


// CURRYING BY CLOSURES

let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(9);
multiplyByTwo(3);