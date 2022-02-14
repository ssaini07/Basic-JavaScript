//local variable
function localVariable() {
    var x = 50;
    console.log(x);
}

localVariable();

//Global variable
var x = 100;

function globalVariable1() {
    console.log('Inside global variable 1: ' + x);
}

function globalVariable2() {
    console.log('Inside global variable 2: ' + x);
}

globalVariable1();
globalVariable2();