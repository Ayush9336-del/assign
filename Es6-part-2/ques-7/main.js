function flatten(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let curr = stack.pop();

    if (Array.isArray(curr)) {
      stack.push(...curr);
    } else {
      result.push(curr);
    }
  }

  return result.reverse();
};
let arr = [ 1 ,2 ,3 , [4 ,5 ,[ 6 ,7 ,[8 ]] , [ 9 , 10]] ,11 ] ; 
console.log(flatten(arr));
