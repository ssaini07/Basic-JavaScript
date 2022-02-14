window.value = 90;

function m() {
    window.value = 100; //declaring global variable by window object  
}

function n() {
    alert(window.value); //accessing global variable from other function  
}

n();