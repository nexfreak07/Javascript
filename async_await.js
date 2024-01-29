// Async Func always returns a promise, if you return any value it will wrap inside a promise

async function x(){
    return "Akash";
}

console.log(x());


// Handling Promise with normal func

const p1 = new Promise((resolve, reject) => {
    // Lets add a timeout here to make it a feel of promise

    setTimeout(()=>{resolve("Hey I am P1");}, 3000)
    
})

// Here the normal func works like it does not waits for anyone so it will print AKash then when the p1 is resolved then it will 
// print p1
function normalFunction(){
    p1.then(res => console.log(res));
    console.log("After Promise");
}

normalFunction();

// In order to ommit such behaviour we need async await so that it prints in order. What happens in call stack is when the timeout is hit
// The func disappears for some time from call stack then it again reappears.

async function withAsync(){
    const data = await p1;
    console.log(data);
    console.log("Printing from Async Func");


    // It will not wait for another 3s because the promise already gets resolved
    const val2 = await p1;
    console.log(val2);
    console.log("Printing from Async Func");
}
withAsync();



// Now lets have 2 promises one which takes 10s and another 5s if we call 10s first in 10s both will be printed at same time, 
// But if we call 5s earlier it will print 5s promise and then it will print 10s promise after more 5s. 


const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve("p2 resolved")}, 5000);
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{resolve("p3 resolved")}, 10000);
})


// Calling 10s first and then 5s

// console.log("Timer Promises");


async function p3First(){
    
    const data2 = await p3;
    console.log(data2);

    const data1 = await p2;
    console.log(data1);
    
    
} 

p3First();



// Calling 5s first and then 10s



async function p2First(){

    const data1 = await p2;
    console.log(data1);
    
    
    const data2 = await p3;
    console.log(data2);
    
} 

p2First();