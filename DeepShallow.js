



// Deep Copy - Creates entire new object - From primitives as well as the objects inside a object

let arr = [1,2,3,[4,5]]

let arr2 = JSON.parse(JSON.stringify(arr));

arr2[3].push(9)
console.log(arr)
console.log(arr2)


// 
// Shallow Copy - It creates a copy of primitives but if there are objects encountered it keeps a refrence in this case [4,5]


let arr1 = [...arr];

arr2[3].push(8)
console.log(arr)
console.log(arr2)
