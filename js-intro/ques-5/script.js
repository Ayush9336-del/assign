
 
let a = document.getElementById('name');
let b = document.getElementById('age');
let c = document.getElementById('salary');
let d = document.getElementById('dob');
let ans = document.getElementById('ans') ; 
let list = [];

function add() {
   // console.log("clicked")
  let obj = {
    name: a.value,
    age: b.value,
    salary: c.value,
    dob: d.value
  };

  list.push(obj) ; 
  ans.innerHTML = "" ; 
  list.forEach(e =>{
   console.log(e)
   ans.innerHTML += `<li> ${e.name + " " + e.age + " " + e.salary + " " + e.dob + '\n' }</li> `; 
  }) 

  filterFunc() ; 

  
}


 
const employees = [
  { name: "Amit",   age: 25, salary: 6000, dob: "1999-02-10" },
      { name: "Riya", age: 19,   salary: 3000,   dob: "2005-05-21"      },
  {   name: "Karan", age:   30, salary: 8000,    dob: "1994-09-12" },
    { name: "Neha", age: 22, salary: 1200,     dob: "2002-11-01" },
  {   name: "Rahul",   age: 28,   salary: 900,   dob: "1996-07-15" }
];


const maxSalary = employees.filter(emp => emp.salary > 5000);
console.log("Salary > 5000:", maxSalary);


const gpByAge = employees.reduce((gp, emp) => {
      if (!gp[emp.age]) {
       gp[emp.age] = [];
  } 
         gp[emp.age].push(emp);
      return gp;
}, {});

console.log("gped by age:", gpByAge);


const updatedEmployees = employees
  .filter(emp => emp.salary < 1000 && emp.age > 20)
  .map(emp => ({
    ...emp,
      salary: emp.salary * 5
  }));

console.log("Updated Employees:", updatedEmployees);
