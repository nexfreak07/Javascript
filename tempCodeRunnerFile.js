function outer(){
    var x = 2;

    function inner(){
        console.log(x);
    }
    return inner();
}

const z = outer;
z()