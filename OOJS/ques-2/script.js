let arr = [ 1,2,3,4,5,6,7,8 ] ; 
//  here i used settimeout to get each value after 3 seconds
function print() {
  for ( let i = 0 ; i < arr.length ; i++ ) {
    setTimeout(() => {
      console.log(arr[i]) ; 
      // i * 3000 to get the difference of 3 seconds 
    }, (i) * 3000);
  }
}


print() ; 


 
