
 var calculator = { 
     a : 0 , 
     b : 0 , 

    read : function(){
     a = Number( prompt("enter a value ")) 
     b = Number( prompt("enter second value ")) ; 

     console.log(`sum is ${calculator.add()}  ,  multiply is ${ calculator.multiply() } , difference is ${calculator.substract()}` ) ; 
    } ,

    add : function (  ){
        let ans = a + b ; 
        // console.log(ans) ;
        return ans ; 
    } , 

    multiply : function( ){
        let ans  = a* b ; 
        // console.log(ans) ; 
        return ans ; 
    } ,
    substract :function (){
        let ans =  a -b  ;
        // console.log(ans) ; 
        return ans  ;
    }
}
