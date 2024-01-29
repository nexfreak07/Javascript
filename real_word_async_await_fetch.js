// Fetch is given by browser to make api calls it always returns a promise.

// Lets fetch GITHUB API
const user = "nexfreak07"
const API_URL = `https://api.github.com/users/${user}`

async function handleFunction(){

    // Fetch gives you a response object- which has a body - a readable stream

    // fetch() => Response.json() => json value
    const response = await fetch(API_URL);

    // We need to convert the response to json
    const jsonValue = await response.json();

    console.log(jsonValue)




    // Older syntax of fetch 

    
    // fetch(API_URL).then((res) => {
    //     const data = res.json();
    //     return data})
    //     .then((jsonValue)=>{console.log(jsonValue)})
} 

handleFunction();