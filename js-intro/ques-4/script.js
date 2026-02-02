 let temp = { 

   name : 'tom' , 
   age : 12 , 
   course : 'js'
 } ;


 let temp2 = temp ; 

 console.log(temp) ;
 console.log(temp2) ;

 temp2.age = 23 ; 

 console.log(temp) ; 
 console.log(temp2) ; 


 let temp3= { 

   name : 'jerry' , 
   age : 10 , 
   course : 'js'
 } ;


 let temp4 = JSON.parse( JSON.stringify(temp3))

console.log(temp3) 
console.log(temp4) 

temp4.age = 50 
console.log(temp3) 
console.log(temp4)



let arr = [ 2,3,4,5,6,342,7,8,9,20] 

let ans = arr.map( (e) =>{
   return e * 2 ;
})

let fil = arr.filter((e)=>{
   return e & 1 ; 
})
let sum = arr.reduce((acc , e ) =>{
   return acc + e ;
}, 0)


console.log(sum)


console.log(fil)

console.log(ans)