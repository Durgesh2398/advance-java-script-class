"use strict";
var public =150;

function myFunction() {
    alert(this);
  }
  myFunction();

eval ("var x = 2");
alert (x);      // This will cause an error 

with (Math){x = cos(2)};   // This will cause an error 

x = 3.14;  // This will cause an error (x is not defined).

myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}

x = {p1:10, p2:20};   // This will cause an error (x is not defined).

var x = 3.14;
delete x;     // This will cause an error 


function x(p1, p2) {}; 
delete x;        // This will cause an error

function x(p1, p1) {};   // This will cause an error 


var x = 010;   // This will cause an error Octal numeric literals are not allowed.

var x = "\010";   // This will cause an error 


delete Object.prototype;   // This will cause an error 


var arguments = 3.14;   // This will cause an error 

