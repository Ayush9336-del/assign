 

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

// let x = 5;

// function first() {
//   console.log(x); // Line 1
//   let y = 10;

//   function second() {
//     console.log(y); // Line 2
//     console.log(z); // Line 3
//     let z = 20;
//   }

//   second();
// }

// first();
// console.log(y); // Line 4


// a = 7 ; 
// console.log(a) ;




// (function(){
//   var a = b = 3;
// })();

// console.log(typeof a, typeof b);


// let arr = [ 1,2,3,4,5 ] 
// console.log(arr.map(e=> e * 2)) 

// const proto = { key :"value"} ; 

// const  obj  = Object.create( proto ) ; 

// console.log(obj)
// console.log(obj.key)

// obj.key  = 110 ; 
// console.log(obj.key)
// console.log(proto.key)

// const orgObj = { company : "abc Org "} 

// const carObj = { carName   : "ford"} 
// const employee = Object.assign( { } , orgObj , carObj )  ; 

// console.log(employee)


// function Person ( name ) {
//   this.name = name ; 
// }

// const person1 = new Person ( 'alice') ; 

// console.log(person1) ; 
// person1.__proto__.lastname = 'garg' 
// console.log(person1) 
// const person2 = new Person('bob') 
// console.log("person2  -->  " ,  person2 )

// function call() {
//         for ( var i = 0 ; i < 10 ; i++ ) {
//         setTimeout( (e)=>{
//             console.log(i) ; 
//         } , 3000)
//         }
// }

// call() ; 
// function call2() {
//         for ( let i = 0 ; i < 10 ; i++ ) {
//         setTimeout( (e)=>{
//             console.log(i) ; 
//         } , 3000)
//         }
// }

// call2() ; 


// function call3 (){
//     for  ( var i = 1 ; i <= 5 ;i++ ) {
//         function close(x) {
//             setTimeout( function() {
//                 console.log(x) ; 
//             } , x * 1000 )
//         }
//         close(i) ; 
//     }
// }

// call3()

// let a = function abc() {
//     console.log("named function") ; 
// }

// a()
 

// let arr= [ 1,2,3,4,5,6,7,8,9 ] 

// let brr = arr.filter((e )=>{
//     return  e % 2 == 0  ; 
// })

// console.log(brr)

// function call( ) {
//         for ( let i = 0 ; i < arguments.length ; i++ ) {
//             console.log(arguments[i])
//         }
// }

// call( 1,2,3,4,5,6,7,8 ) 

// function call (a ,b ,c ) {
//     console.log(arguments[0]) 
//     console.log(arguments[1]) 
//     console.log(arguments[2]) 

// }

// call(1,2,3) ; 

// let temp = { 
//     namee : "radhe" , 
//     age : 12 

// }


// let temp1 = {
//     namee : "krishn" , 
//     age : 12 
// }

// function print(home, state) {
//     console.log(this.namee + " " + this.age + " " + home + " " + state )  
// }

// print.call(temp , 'vrindavan' , 'up') ; 
// print.call(temp1 , 'barsana', 'up') ; 


// print.apply(temp,[ "vrindavan" , 'up'] ) 


// let printName = print.bind( temp1 ,  'vrindavan' , 'up' ) ; 

// printName('down')


// let obj = { 
//     id : 1 ,
//     course : 'js' , 
//     venue : 't3' 
// }



// let { id ,  course :crs , venue } = obj ; 
// console.log(id , crs , venue ) ;
// console.log(id , course , venue ) ;


// let { id , course , venue } = obj ; 
// console.log(id , course , venue ) ;

// let arr = [ 1,2,3,4,5,6,7 ] ;

// let  [ a,b,c , , d ] = arr ; 
// let  [ a,b,c , ] = arr ; 
// console.log(a,b,c ) ; 
// let  [ a,b,c , , d ] = arr ; 
// console.log(a,b,c ,d ) ; 


function print( ...arr  ) {

    console.log(arr) ; 
}
// function print( ...rest ) {

//     console.log(...rest) ; 
// }

let arr =   [1,2,3,4,5,6] ;
print(...arr)

print( "hello" , "world" , "new")


function print1({ ...rest }) {

    console.log(rest) ; 
}

let obj = { 
    id : 1 ,
    course : 'js' , 
    venue : 't3' 
}

print1({ ...obj })