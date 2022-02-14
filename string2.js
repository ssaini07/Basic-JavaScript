//JavaScript String Methods

//1) JavaScript String charAt(index) Method
var str = 'Javascript is one of  the best languages';
let str1 = str.charAt(14);
console.log(str1);

//2) JavaScript String concat(str) Method
var s1 = 'Reactjs';
var s2 = 'Angular';
let s3 = s1.concat(s2);
console.log(s3);

//3) JavaScript String indexOf(str) Method
var x = "Basics of Reactjs";
var n = x.indexOf("of");
console.log(n);

//4) JavaScript String lastIndexOf(str) Method
var y = "Ample resources available for learning javascript";
var m = y.lastIndexOf("available");
console.log(m);

//5) JavaScript String toLowerCase() Method
var s1 = "HTML is not a Programming Language";
var s2 = s1.toLowerCase();
console.log(s2);

// 6)JavaScript String toUpperCase() Method
var s1 = "html is not a programming Language";
var s2 = s1.toUpperCase();
console.log(s2);

//7) JavaScript String slice(beginIndex, endIndex) Method
var s1 = "Angular Developer";
var s2 = s1.slice(9, 11);
console.log(s2);

//8) JavaScript String trim() Method
var s1 = "     React Native Developer  trim operation   ";
var s2 = s1.trim();
console.log(s2);

//9)JavaScript String split() Method
var str = "My Name is John";
console.log(str.split(' '));