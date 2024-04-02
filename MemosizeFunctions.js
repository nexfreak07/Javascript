function fact(num, cache={}){
	if(cache[num]){  console.log(cache); return cache[num]}
	if(num===0) return 1;
  if(num===1) return 1;
 
  return cache[num] = num * fact(num-1, cache) ;
	
}

console.log(fact(6))


// Memoize Any Function with Varying Args


function add(num1, num2){
	return num1 + num2;
}

function multiply(num1, num2, num3){
	return num1* num2* num3;
}


function getUUID(fn, args){
	let uniqueId = [];
  uniqueId = uniqueId.concat(fn.name, args);
  return uniqueId.join("|");
}

function memoize(fn){
	let cache = {}
	return function(...args){
  	const id = getUUID(fn, args);
    if(cache[id]){
    console.log("from")
    	return cache[id];
    }
    else{
    console.log("Not")
    	cache[id] = fn(...args);
      return cache[id];
    }
  }
}

const memoizeAdd = memoize(add);
const memoizeMul = memoize(multiply);

console.log(memoizeAdd(10,20))
console.log(memoizeAdd(10,20))

console.log(memoizeMul(10,20, 30))
console.log(memoizeMul(10,20, 30))