//                  ques -1 

const obj = {
 a: "foo",
 b: function () {
 console.log(this.a);
 },
};
const c = obj.b;
obj.b();
c();
// console.log(this)


// output - 
// foo 
// undefined


// Reason  -> this keyword points to the object that invokes the function at runtime 
// The first call works because the function is invoked as an object method, so this refers to the object.
// in the second call it gives undefined because the c() is standalone function that's why it points to the global object 


// to fix this we can use the bind method 

const x = obj.b.bind(obj) ; 
x()
// bind() creates a new function where this is permanently fixed to the provided object.
// in our case it is  obj.b 
// now it will print  --> foo 





//                       ques -2 

let str = [...'Lydia']
console.log(str)  

// strings are iterable and the spread operator (...) works on iterables
// it spreads each character of the string into a new array


//                      ques-3

let user={ _name:"Piyush", age:24 }
const {_name}= user;
console.log(_name);
const { _name: my_name } = { _name: 'Lydia' };
console.log(_name); 


// const {_name}= user; this means -> const _name = user._name

// const { _name: my_name } = { _name: 'Lydia' }; means -> 
//    _name = _name , my_name = 'Lydia'
// const my_name = 'Lydia'
// that's why teh out is 
// piyush 
// piyush 

//                  ques-4

 console.log({a:1} == {a:1});
// console.log({a:1} === {a:1});

//  both will give false because in js the objects are compared on the basis of their references , since their references are different so it will give false value
//                ques-5 
let person = { name: 'Lydia' };
const members = [person];
person = null;
console.log(members);

// console.log(person)

// when we are inserting person in the array and assigning it to members 
// so member has the reference of person 
// because in array if 
//    arr = [ 1,2,3,4,5 ] 
// then arr will point to the reference of the first element that is 1 on index 0 

// so person is pointing to { name : 'Lydia} \
// and members is pointing to { name : 'Lydia} 

// then we changed for person which is now pointing to null 

// that's why member is still showing the object [{ name: "Lydia" }]
 


 