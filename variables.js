//Local variable
function abc() {
    var x = 10;
    console.log(x);
}

abc();

//Global variable
var data = 200; //global variable  
function a() {
    console.log(data);
}

function b() {
    console.log(data);
}
a(); //calling JavaScript function  
b();