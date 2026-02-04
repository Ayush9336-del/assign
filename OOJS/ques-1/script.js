  function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}, age ${this.age}`);
};

 function Employee(name, age, empId, salary) {
  Person.call(this, name, age);  
    this.empId = empId;
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

 function Developer(name, age, empId, salary, tech) {
  Employee.call(this, name, age, empId, salary);
  this.tech = tech;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

 const dev1 = new Developer("Ayush", 23, 101, 50000, "JavaScript");
dev1.introduce();
console.log(dev1.tech);
