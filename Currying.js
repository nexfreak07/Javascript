function add(x ,y){
    console.log(x+y);
}

const addTwo = add.bind(this, 2);

addTwo(3)



// ----------------------------------------------Infinite Currying 


function add(a){
	
    return function(b)
    {
            if(b){
            return add(a + b);
        }
        else return a
         
    }
  }
  
  /* 
  console.log(add(5)(2)()); */
  console.log(add(5)(2)(3)(4)(1)());
// ----------------------------------------------------------------------------------------------------------------


  // Evaluate in Currying
/* 
evaluate("sum")(4)(2) - 6
evaluate("mul")(4)(2) - 8
evaluate("div")(4)(2) - 2
evaluate("sub")(4)(2) - 2
*/


function evaluate(type){
    return function(a){
    return function(b){
      if(type=="add"){
        return a+b
    }
    else if(type=="mul"){
        return a*b
    }
    else if(type=="div"){
        return a/b
    }
    else{
        return a-b
    }
  }
}

}

console.log(evaluate("sub")(4)(2))

// In currying the no of nested func depends on args passed but in partial application thats not the case we can have 3 args and 2 nested funcs thats partial application


// 1. Add Function
// Input: add(2)(3)(4)
// Output: 2 + 3 + 4 = 9

// 2. Multiply Function
// Input: multiply(2)(3)(4)
// Output: 2 * 3 * 4 = 24

// 3. Power Function
// Input: power(2)(3)
// Output: 2^3 = 8

// 4. Greet Function
// Input: greet("Hello, ")("John")
// Output: Hello, John

// 5. Filter Function
// Input: filter(isEven)([1, 2, 3, 4, 5])
// Output: [2, 4] (assuming isEven filters even numbers)

// 6. Partial Application
// Input: partial(add, 2, 3)
// Output: add(2, 3)

// 7. Compose Function
// Input: compose(subtractTen, multiplyByThree, addTwo)
// Output: Result of subtractTen(multiplyByThree(addTwo(x)))

// 8. Curried Map Function
// Input: map(double)([1, 2, 3])
// Output: [2, 4, 6] (assuming double doubles each element)

// 9. Curried Filter Function
// Input: curriedFilter(isEven)([1, 2, 3, 4, 5])
// Output: [2, 4] (assuming isEven filters even numbers)

// 10. Curried Reduce Function
// Input: curriedReduce(sumReducer, 0)([1, 2, 3, 4, 5])
// Output: 15 (assuming sumReducer sums the elements)

// 11. Logger Function
// Input: logger("INFO")("Message")
// Output: Logs "INFO: Message"

// 12. Format Date Function
// Input: formatDate("YYYY-MM-DD")(new Date())
// Output: Formatted date string like "2024-02-23"


// Currying for DOM manipulation

function updateDom(id){
	return function(text){
  	document.querySelector("#"+id).textContent = text;
  }
}

updateDom("heading")("Welcome Back")



// Convert Normal Function to currying

const sum = (a, b, c, d) => {
    return a + b + c + d
  };
  
  function curry(func) {
    return function curriedFunc(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function(...next) {
          return curriedFunc(...args, ...next);
        }
      }
  
    }
  }
  
  const totalSum = curry(sum);
  
  console.log(totalSum(1)(2)(3)(4))