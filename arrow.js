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