function fn(){
  fn.i++;
}

function demo(){
  fn.j++;
  return new fn;
}

fn.i = 0
fn.j = 0

demo();
demo();
demo();
demo();
fn()
fn()

console.log(fn.j)
console.log(fn.i)