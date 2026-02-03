 

//  function foo() { 
//     if ( true ) { var a  = 5 ; }

//     alert(a)  ;

//  }
// function func() {

//     // for ( let a = 0 ; a < 5 ;a ++ ) {} 

//     // var x = 10 ; 
//     // switch(x) {
//     //     case 10 : let a = 5 ; 
//     //     break ; 
//     // }
//     while ( true ) {
//         let a = 5 ; 
//         break ; 
//     }

//     console.log(a) ; 
// }

// func() ; 


// function sayNum () {
//     var num = 42 ; 
//     var say = function() {
//         console.log(num) ; 
//     } 
//         num++ ; 
//         return say ; 
// }



// var sayNum  =sayNum()  ; 
// sayNum() ; 
// sayNum() ; 


// function counter() {
//     let  count = 0 ;

//     function increase() {
//         count++ ; 
//         return count ;
//     }
//     return increase() ; 
                                 
// }
// let value = counter() ; 

// (function() {
//     const localVar = "i am a pirate " ; 
//     console.log(localVar) ; 
// })() ; 
// console.log(localVar) ; 



// const isBelow = (current)=> current < 40 ; 
// const array = [ 1, 30 , 39, 29 , 10 , 13 ] 
// console.log(array.some(isBelow))



// function counter() {
//     let count =  0 ;
//     function increment() {
//         count++ ;
//         return count ;  
//     }
//     return increment ; 
// }


//  let one = counter() ;  
//  console.log(one())
//  console.log(one())
//  console.log(one())
//  console.log(one())
//  console.log(one())
//  console.log(one())

let x = 5;

function first() {
  console.log(x); // Line 1
  let y = 10;

  function second() {
    console.log(y); // Line 2
    console.log(z); // Line 3
    let z = 20;
  }

  second();
}

first();
console.log(y); // Line 4











