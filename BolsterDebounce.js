var input = document.getElementById("input");





function getData(value){
 console.log(value)
}


const debounce = (func, delay)=>{
	let timer;
	return function(...arguments){
  	let context = this;
    let args = arguments
  	clearTimeout(timer);
    timer = setTimeout(()=>{
    	func.apply(context,args)
    }, 300)
  }
}


const betterFunction = debounce((event)=>{getData(event.target.value)}, 300);

console.log(betterFunction)

input.addEventListener("keyup", (e)=>{betterFunction(e)});


// The Alternative Best Approach

var button = document.getElementById("input");



const getData = (event) => {
console.log(event.target.value);
}

/* const throttle = (func, delay)=>{
let flag = true;

return function(...arguments){

let context = this;
let args = arguments
  if(flag){
    flag = false;
    func.apply(context,arguments);
    setTimeout(()=>{
      flag = true;
    }, delay)
  }
}
} */

/* const better = throttle(getData, 1000) */

const debounce2 = (fn ,delay)  => {


let timer;
return function(...arguments){
let context = this;
let args = arguments;
clearTimeout(timer);

timer = setTimeout(()=>{
	fn.apply(context, arguments);
}, delay)
}
}

const devounced = debounce2(getData, 300)

button.addEventListener("keyup", devounced)
