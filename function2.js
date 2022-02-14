const arr = ['Orange', 'Banana', 'Pineapple', 'kiwi'];
arr.forEach(function(value, index) {
    console.log(value, index);
});

//function scope
let i = 10; //globally declared

function ui(name) {
    i = 20; //this i is local to this function
    //if I do not write var in line 10 then it will override the i declared in line 7 and print 20

    //if I declare let j = 20 outside this function and let j = 15 in the function then it will print
    //j which will be declared outside the function owing to the block scope although
    // let j= 15 will be accessible inside function only, and if I remove let in line 10 then it will 
    //automatically overrride the let i = 10; declared outside the function and print 20 like in the case of var
    return `My name is ${name}`;
}
console.log(ui('Smith'), i);