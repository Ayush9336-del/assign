  
let arr = [ 1,2,3,4,5,6,7,8,9 ] ; 

//  to get the even values 

console.log(arr.filter(e=> e %2 ==0 ))

// to double the values 
console.log(arr.map(e=> e * 2 )) 


// to get the sum of all elements 

let ans = arr.reduce((e , acc ) => {
  return  acc + e } , 0 )

console.log(ans)   

// to traverse on the elements 

console.log ( arr.forEach(e => {
  console.log(e)
}))

// to find if any of the element follows the condition 
console.log(arr.some(e=>  e > 7 ))

// to find any element in an array 
console.log(arr.find(e => e == 5 ))