//JavaScript String Methods

//1) JavaScript String charAt(index) Method
var str = 'learning Javascript';
let str1 = str.charAt(4);
console.log(str1);

//2) JavaScript String concat(str) Method
var s1 = 'Learning';
var s2 = 'Javascript';
let s3 = s1.concat(s2);
console.log(s3);

//3) JavaScript String indexOf(str) Method
var x = "javascript methods learning from different websites";
var n = x.indexOf("learning");
console.log(n);

//4) JavaScript String lastIndexOf(str) Method
var y = "javascript methods learning from different websites";
var m = y.lastIndexOf("different");
console.log(m);

//5) JavaScript String toLowerCase() Method
var s1 = "JavaScript toLowerCase Example";
var s2 = s1.toLowerCase();
console.log(s2);

// 6)JavaScript String toUpperCase() Method
var s1 = "javascript toupercase example";
var s2 = s1.toUpperCase();
console.log(s2);

//7) JavaScript String slice(beginIndex, endIndex) Method
var s1 = "javascript";
var s2 = s1.slice(1, 4);
console.log(s2);

//8) JavaScript String trim() Method
var s1 = "     javascript trim operation   ";
var s2 = s1.trim();
console.log(s2);

//9)JavaScript String split() Method
var str = "This is JavaTpoint website";
console.log(str.split(' '));