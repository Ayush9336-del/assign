// we can treat the arguments as array like structure so if we pass the srguments in the function then we can access it by indices


function call (a ,b ,c ) {
    console.log(arguments[0]) 
    console.log(arguments[1]) 
    console.log(arguments[2]) 

}

call(1,2,3) ; 


// The arguments object captures every argument passed to the function, even if we pass more arguments than the function  declares as parameters. 

function call1( a,b,c ) {
        for ( let i = 0 ; i < arguments.length ; i++ ) {
            console.log(arguments[i])
        }
}

call1( 1,2,3,4,5,6,7,8 ) 


//  we can manipulate the value of the arguments by accessing the arguments [index]

function call (a ,b ,c ) {
    
  arguments[2] = 4000 
  console.log(arguments[2])
  console.log(c)

}

call(1,2,3) ; 


