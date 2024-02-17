const getData = () => {
    console.log("API Calls")
}


// Debounce method here is used to create a timer, so that if we pause till the delay an api call will be made
// Else if we type anything the api call will be revoked by clear timeout

// This is a optimisation technique which helps not to make unecessary api calls and avoids the browser to freeze

const debouce = (fn, delay)=>{
    let timer;
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context, args)
        }, delay)
    }
}


const betterFuction = debouce(getData, 1000);