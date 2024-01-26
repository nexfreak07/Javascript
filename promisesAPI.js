// Are used to make Parallel API Calls


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P1 Rejected")
        // resolve("P1 Resolved")
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("P2 Resolved")
        reject("P2 Rejected")
    }, 1000);
})


const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 Rejected")
        // resolve("P3 Resolved")
    }, 2000);
})

// Prmoise All will go for All or None Promises. It will wait for all promises to get success and return all otherwise 
// if any fails it returns the error what is rejected
Promise.all([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) });


// Promise All Setelled is same as promise.all will wait for other to be resolved if any fails and will return an array 
// the promise which fails will also be in that array

Promise.allSettled([p1,p2,p3])
    .then((res)=>{console.log(res)})
    .catch((err)=>{console.error(err)});


// Promise Race this API will race with other promise and will return the promise which executes at the earliest. 
//If fails it will return the error. Understand this way only the value of earliest promise will be the result

Promise.race([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) });

// Promise any is same like race will return what is at the earliest success promise, but if all promises fails it will return an aggregated error

Promise.any([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) });