// ------------------------------------------- Polyfill for Print ----------------------------------------

let arr = [1,2,3,4,5]

Array.prototype.print = function(...args){
		let arr1 = this;
    let array = [...arr1, ...args]
		let res = "";
    for(let i = 0 ; i< array.length; i++){
    		if(i==array.length-1){
        res += array[i];
        }
        else{
        res += array[i] + ",";
        }
    }
    return res;
}

let arr2 = [7,8,9]
let result = arr.print(arr2)
console.log(result)

// --------------------------------------------------------Polyfill for Deepcopy----------------------------

Object.prototype.deepcopy = function() {
  const obj = this;
  
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = typeof obj[key] === 'object' ? obj[key].deepcopy() : obj[key]; // Key is the variable so we use [] if we know the property exactly then only we use.
      // Like obj.a it means a is {a : ...}  if we use obj.key it will look for {key : ...} which is not there so we use obj[key]
    }




















    
  }
  
  return clone;
};







// Polyfill for Call

var obj = {nam : "Akash"};

var printName = function(age, year, city, country){
	console.log(this.nam + " "+ age + " " + year + " " + city + " " + country);
}

/* printName.call(obj, 25) */

Function.prototype.myCall = function(ob = {}, ...args){
      if(typeof this !== 'function'){
      	throw new Error("Not Callable")
      }
      else{
      	let fn = this;
      ob.fn = fn;
      ob.fn(...args)
      }
  
}



// Polyfill for Apply
Function.prototype.myApply = function(ob={}, args =[]){ // args is an array a single srg in itself so we dont ...
  if(typeof this !== 'function'){
    throw new Error("Not Callable");
  }
  if(!Array.isArray(args)){ // args is already an array so we dont ...args
    throw new Error("Type Error : arguments should be an array")
  }
  
  let fn = this
  ob.fn = fn;
  const result =  obj.fn(...args)
  delete ob.fn
  return result 
}


//printName.myApply(obj, [25, 1999])




// Polyfill for bind

Function.prototype.myBind = function(ob = {}, ...args){
	let context = this;
  return function(...args2){
    
    ob.fn = context;
    ob.fn(...args, ...args2);
    delete ob.fn
  }
} 


printName2 = printName.myBind(obj, 25, 1999);
printName2("Pune", "India")



// Polyfill for Filter


Array.prototype.filter = function(callback){
  let arr = this;
	let result = [];
  for(let i=0; i<arr.length; i++){
  	 callback(arr[i]) && result.push(arr[i]);
  }
  
  return result;
}

const cb = (item) => item % 2 !== 0;

let res = [1,2,3,4,5,6].filter(cb);



// Polyfill for Map 


Array.prototype.map = function (callback){
	let arr = this 
	let result = [];
  
  for(let i=0; i<arr.length; i++){
  	let res = callback(arr[i]);
    result.push(res);
  }
  return result;
}

// Polyfill for reduce

function myReduce(array, callback, initialValue){
	let result = initialValue;
  for(let i=0; i<array.length; i++){
  	result = callback(result, array[i]);
  }
  return result;
}


//Polyfill for ForEach


Array.prototype.myForEach = function(callback){
	let arr = this;
  for(let i=0; i<arr.length; i++){
  	callback(arr[i], i, arr)
  }
}