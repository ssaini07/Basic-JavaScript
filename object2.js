//Defining the object using object literal
const myCycle = {
    make: 'Hero',
    model: 'Racer f1',
    year: 2022
};

console.log(myCycle);

//creating an instance of the object
var laptop = new Object();
laptop.id = 10;
laptop.company = 'Dell';
laptop.hardDisk = '512GB';
console.log(laptop);

//By using object constructor
function Animal(category, birth, lifeExpectancy) {
    this.category = category;
    this.birth = birth;
    this.lifeExpectancy = lifeExpectancy;
}

var myAnimal = new Animal('Dog', 'German Shephard', 12);
console.log(myAnimal);