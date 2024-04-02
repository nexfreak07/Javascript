const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);

const p3 = Promise.resolve(3);

const p4 = Promise.resolve(4);


function PromiseAll(promiseList){
	return new Promise((resolve, reject) => {
  	let output = [];
    promiseList.forEach((promise, index)=> {
    	try{
      	promise.then((data)=> {output.push(data)})
        if(index+1 < promiseList.length)
        {
        	resolve(output)
        }
      }
      catch(e){
      	reject(e)
      }
    })
    
  })
	
}

const p = PromiseAll([p1,p2,p3, p4])

p.then (d => console.log(d))
