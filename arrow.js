// // No parameters
// () => { statements }
// // single parameter
// (param) => { statements }
// param => { statements } 
// // multiple parameters
// (param1,param2,....paramN) => { statements }
// // Returning objects
// // enclose objects by parenthesis so they can be treated as objects
// (param1,param2) => ( { id: 1 , key: value });


var hello;

hello = function() {
  return "Hello World!";
}
console.log(hello());

hello = () => {
  return "Hello World!";
}
console.log(hello());

hello = () => "Hello World!";
console.log( hello());

hello = (val) => "Hello " + val;
console.log(hello("Universe!"));

hello = val => "Hello " + val;
console.log( hello("Universe!"));

hello = () => {
    document.getElementById("demo").innerHTML += this;
  }
window.addEventListener("load", hello);
document.getElementById("btn").addEventListener("click", hello);