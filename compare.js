function compare(a,b){
	// Type Check
  if(typeof a !== typeof b){
  	return false;
  }
  
  
  // Primitives and Null check
  if(typeof a !== 'object' || a === null){
  	return a === b;
  }
  
  
  // Array Check
  
  if(Array.isArray(a)){
  	if(!Array.isArray(b) || a.length !== b.length)
    	return false;
      
     for(let i=0; i<a.length; i++){
     	if(!compare(a[i], b[i]))
      	return false;
     }
  	return true;  
  }
 
  
  
  // Object Check
  
  if(typeof a === 'object' && typeof b === 'object'){
  	let keysA = Object.keys(a);
    let keysB = Object.keys(b);
    if(keysA.length !== keysB.length)
    	return false;
     for(let i=0; i< keysA.length; i++){
     

      // Very Important - Object Keys can be any datatype so better have a track
     	 let keyA = keysA[i];
       let keyB = keysB[i]
     	if(!keysB.includes(keyA))
      	return false;
        
       if(!compare(a[keyA], b[keyB]))
       	return false;
     }
     return true;
  }
  return false;
}
  
  const complexObject1 = {
    name: 'John',
    age: 30,
    isAdmin: true,
    favoriteFoods: ['Pizza', 'Sushi'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
    },
    friends: [
      {
        name: 'Alice',
        age: 28,
        isAdmin: false,
        favoriteFoods: ['Burgers', 'Ice Cream'],
        address: {
          street: '456 Elm St',
          city: 'Another Town',
          country: 'USA'
        }
      },
      {
        name: 'Bob',
        age: 32,
        isAdmin: true,
        favoriteFoods: ['Tacos', 'Pasta'],
        address: {
          street: '789 Oak St',
          city: 'Yet Another Town',
          country: 'USA'
        }
      }
    ]
  };
  
  const complexObject2 = {
    name: 'John',
    age: 30,
    isAdmin: true,
    favoriteFoods: ['Pizza', 'Sushi'],
    address: {
      street: '123 Main St',
      city: 'Anytown',
      country: 'USA'
    },
    friends: [
      {
        name: 'Alice',
        age: 28,
        isAdmin: false,
        favoriteFoods: ['Burgers', 'Ice Cream'],
        address: {
          street: '456 Elm St',
          city: 'Another Town',
          country: 'USA'
        }
      },
      {
        name: 'Bob',
        age: 32,
        isAdmin: true,
        favoriteFoods: ['Tacos', 'Pasta'],
        address: {
          street: '789 Oak St',
          city: 'Yet Another Town',
          country: 'USA'
        }
      }
    ]
  };
  
  console.log(compare(complexObject1, complexObject2));  // Should return true
  
  