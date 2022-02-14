/*
We can use 4 variant of Date constructor to create date object.
Date()
Date(milliseconds)
Date(dateString)
Date(year, month, day, hours, minutes, seconds, milliseconds) */

//1) JavaScript Date Example
var today = new Date();
console.log(today);

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
console.log("Date is: " + day + "/" + month + "/" + year);

//2)JavaScript Current Time Example
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
console.log("Current time is: " + m + ":" + s);