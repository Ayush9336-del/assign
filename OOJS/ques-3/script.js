

let temp = { 
    namee : "radhe" , 
    age : 12 

}


let temp1 = {
    namee : "krishn" , 
    age : 12 
}

function print(home, state) {
    console.log(this.namee + " " + this.age + " " + home + " " + state )  
}

print.call(temp , 'vrindavan' , 'up') ; 
print.call(temp1 , 'barsana', 'up') ; 


print.apply(temp,[ "vrindavan" , 'up'] ) 


let printName = print.bind( temp1 ,  'vrindavan' , 'up' ) ; 

printName('down')