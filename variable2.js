//local variable
function localVariable() {
    var y = 40;
    console.log(y);
}

localVariable();

//Global variable
var y = 80;

function globalVariable1() {
    console.log('Inside global variable 1: ' + y);
}

function globalVariable2() {
    console.log('Inside global variable 2: ' + y);
}

globalVariable1();
globalVariable2();