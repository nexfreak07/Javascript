function flatten(src, dest){
	for(let i of dest){
  	src.push(i);
  }
  return src
	
}


Array.prototype.myConcat = function(){
	let arr = this; 
  let args = arguments;
  for(let i=0; i<args.length; i++){
  	if(Array.isArray(args[i])){
    arr = 	flatten(arr, args[i]);
    }
    else{
    	arr.push(args[i]);
    }
  }
  return arr;
}


console.log([1,2,3].myConcat([4,5,6], undefined, null, ()=>{}, "A"))