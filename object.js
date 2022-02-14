//Defining object using object literals
const obj = {
    name: 'Server',
    restart: function() {
        console.log("The " + this.name + " is restarting soon...");
    },
};

console.log(obj.restart());

//By using object constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const john = new Person('Smith', 30);
console.log(john);

//creating an instance of the object
var emp = new Object();
emp.id = 101;
emp.name = "Ravi Malik";
emp.salary = 50000;
console.log(emp);