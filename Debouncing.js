
// Normal Way of calling
let counter = 0; 
const getData = () => {
    console.log("API call made", counter++)
}

// Debouncing is the way so that we dont make frequest api calls hence its a way of optimising and not freezing the browser
// We provide a delay, if anything happens we will make the call else we wont. 
// Example - if i keep on presssing keys it wont call if i pause for 1s it will make an api call


// for that we need to have a function which is getData in optimised way lets call it better function.





// Now we will call this betterfunction in the HTML code

// Lets create the debounced function. 

const debounced = (fn, delay) => {
    let timer;
    return function(){
        let context = this;
        let ar = arguments  // Dont use arguments = arguments
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, ar);
        },delay)
    }
}



const betterFunction = debounced(getData, 1000);