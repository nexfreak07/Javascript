const obj = {
    firstName : "Akash",

    
}

const getName = function(){
    console.log(this.firstName)

}

const getName2 = getName.bind(obj);

console.log(getName2())





