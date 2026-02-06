//                ques-1    Filter unique array members using Set.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 1, 5, 6, 3, 2, 3, 4, 7, 8, 9, 5, 4];

let ans1 = new Set(arr);

ans1.forEach((e) => console.log(e))


// First, I created an array that contains duplicate values. Then I passed this array to the Set constructor. A Set stores only unique values so all duplicate elements were automatically removed.


//                   ques -2    Filter anagrams using Map.


let strs = ["silent", "eat", "ate", "listen", "hello", "how", 'who']

let mpp = new Map();
for (let i = 0; i < strs.length; i++) {
    let temp = strs[i].split("").sort().join("");
    if (!mpp.has(temp)) {
        mpp.set(temp, [])
    }
    mpp.get(temp).push(strs[i]);
}

console.log(mpp)


// we will use map to track the strings , we will sort the string then check if it is already present in the map if yes then we will just map the original string with the key otherwise create one and then map it 



//                          ques -3   inheritance 

class Person {
    #id;

    name;

    constructor(name, id) {
        this.name = name;
        this.#id = id;
    }


    getName() {
        return `Name: ${this.name}`;
    }

    getId() {
        return this.#id;
    }

    static greet() {
        return "This is the Person class";
    }
}

 class Employee extends Person {
    salary;

    constructor(name, id, salary) {
        super(name, id);
        this.salary = salary;
    }

    getSalary() {
        return `Salary: ${this.salary}`;
    }

    static role() {
        return "Developer";
    }
}

 class Manager extends Employee {
    department;

    constructor(name, id, salary, department) {
        super(name, id, salary);
        this.department = department;
    }

    getDepartment() {
        return `Department: ${this.department}`;
    }

    static designation() {
        return "Manager manages a department";
    }
}

 let m1 = new Manager("Ayush", "12345678", 50000, "IT");

 console.log(m1.getName());
   console.log(m1.getSalary());
  console.log(m1.getDepartment());
console.log(m1.getId());

 console.log(Person.greet());
  console.log(Employee.role());
console.log(Manager.designation());



//                          ques-4   static functions

class MathFunc {
   static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

 console.log(MathFunc.add(10, 5));
console.log(MathFunc.subtract(10, 5));
console.log(MathFunc.multiply(10, 5));
// we don't need to create an object to call a static function.