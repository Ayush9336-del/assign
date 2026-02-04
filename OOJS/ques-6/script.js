  

function func() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = func();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
