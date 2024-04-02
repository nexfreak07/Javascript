function myIterator(start=0, end=Infinity, step=1){
	let nextIndex = start;
  let IterationCount = 0;
  
  return {
  	next(){
    	if(nextIndex<=end){
      	nextIndex = nextIndex + step;
        IterationCount++;
        return {value: nextIndex, done: false};
      }
      else{
      	return {value: IterationCount, done:true}
      }
    }
  }
}

const iter = myIterator(0,30,2);

let result = iter.next();
while(!result.done){
	console.log(result.value);
  result = iter.next();
}