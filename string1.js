//JavaScript String Methods

//1) JavaScript String charAt(index) Method
var str = 'learning Javascript';
let str1 = str.charAt(6);
console.log(str1);

//2) JavaScript String concat(str) Method
var s1 = 'Concpet';
var s2 = 'Web Intro';
let s3 = s1.concat(s2);
console.log(s3);

//3) JavaScript String indexOf(str) Method
var x = "learning web intro concepts";
var n = x.indexOf("learning");
console.log(n);

//4) JavaScript String lastIndexOf(str) Method
var y = "javascript methods learning from different websites";
var m = y.lastIndexOf("different");
console.log(m);

//5) JavaScript String toLowerCase() Method
var s1 = "Javascript is a Scripting Language";
var s2 = s1.toLowerCase();
console.log(s2);

// 6)JavaScript String toUpperCase() Method
var s1 = "javascript is a scripting language";
var s2 = s1.toUpperCase();
console.log(s2);

//7) JavaScript String slice(beginIndex, endIndex) Method
var s1 = "Reactjs Developer";
var s2 = s1.slice(9, 11);
console.log(s2);

//8) JavaScript String trim() Method
var s1 = "     javascript trim operation   ";
var s2 = s1.trim();
console.log(s2);

//9)JavaScript String split() Method
var str = "My Name is Smith";
console.log(str.split(' '));