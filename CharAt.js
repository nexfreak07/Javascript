String.prototype.myCharAt = function(index=0){
	let str = this;
  if(index>str.length || index < 0)
  	return " ";
   return str[index]; 
}

const str = "Akash is Good Boy";

console.log(str.myCharAt(4000))