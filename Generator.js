const button = document.getElementById("btn");


function*  generateCount(len, button){
  for(i=0; i<=len; i++){
  	button.textContent = i;
  	yield i;
  }
}

let countGenerator = generateCount(10, button); 

button.addEventListener("click", ()=>{ countGenerator.next()
	if(done){
  	countGenerator = generateCount(10,button);
  }
})