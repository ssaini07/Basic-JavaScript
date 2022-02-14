//Defining the object using object literal
const myCar = {
    make: 'Toyota',
    model: 'Land Cruiser',
    year: 2022
};

console.log(myCar);

//creating an instance of the object
var library = new Object();
library.id = 10;
library.book = 'Economics';
library.staff = 'Teacher';
console.log(library);

//By using object constructor
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var myVehicle = new Vehicle('Bajaj', 'pulsar', 2008);
console.log(myVehicle);