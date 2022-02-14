function greet(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName + ' Nice to meet you');
}

greet('Dave', 'Smith');

//Creating function inside an object
const myobj = {
    name: 'Johnson',
    age: 30,
    job: function() {
        return 'Software engineer';
    }
};
console.log(myobj.job());