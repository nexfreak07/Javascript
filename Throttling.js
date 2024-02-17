// This is very similar to debouncing but it completes the coundown.
// It takes a flag as true and sets it false if its true and inside the setTimeout and it sets again back to true after a delay.

// Hence the approach here is we need to throttle the events or skip the events for that much time

// You can add it on HTML as well by onresize or by window.addEventListener("resize", handleResize)


const handleResize = () => {
    console.log("Resized")
}

// window.addEventListener("resize", handleResize)


// here it is called many times as we resize so we need to throttle the behaviour


const throttle = (fn, limit)=>{
    let flag = true;
    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            flag = false;
            fn.apply(context, args)
            setTimeout(()=>{
                flag = true;
            }, limit)
        }
    }
}

const betterFunction = throttle(handleResize, 3000);

