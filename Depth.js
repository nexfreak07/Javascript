Array.prototype.myFlat = function(depth=Infinity){
	let input = this;
  let output = [];
	function flatten(input, depth){
  	for(let i=0; i< input.length; i++){
    	if(Array.isArray(input[i]) && depth > 0){
      	flatten(input[i], depth-1);
      }
      else{
      	output.push(input[i]);
      }
    }
    return output
  }
  return flatten(input, depth);
}


console.log([1,2,3,[4,5,[6,7,[9,10]]]].myFlat(3))