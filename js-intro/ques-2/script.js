 let str = document.getElementById('str') ; 
 let ans = document.getElementById('ans') ; 

function check() {
    let value = str.value ; 
    let n = value.length ; 
    for ( let i = 0 ; i < n /2;i++ ) {
        if ( value[i] != value[n-i-1]) {
            ans.innerText = 'Not a palindrome' ; 
            console.log()
            return  ; 
        }
    }

     ans.innerText = "Is's a valid palindrome"; 
}


 