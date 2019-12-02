var x = myFunction(4, 3);
console.log(x);
function myFunction(a, b) {
  return a * b;
}

var x = function (a, b) {return a * b};
console.log(x);


var x = function (a, b) {return a * b};
console.log(x(4, 3));


var myFunction = new Function("a", "b", "return a * b");
console.log(myFunction(4, 3));


var myFunction = function (a, b) {return a * b}
console.log( myFunction(4, 3));


(function () {
    console.log("Hello! I called myself");
  })();



  function myFunction(a, b) {
    return a * b;
  }
  var x = myFunction(4, 3);
  console.log(x);

  function myFunction(a, b) {
    return a * b;
  }
  var x = myFunction(4, 3) * 2;
  console.log(x);


function myFunction(a, b) {
    return arguments.length;
  }
  console.log(myFunction(4, 3));


  function myFunction(a, b) {
    return a * b;
  }
  console.log(myFunction.toString());


const x = (x, y) => x * y;
console.log( x(5, 5));



const x = (x, y) => { return x * y };
console.log(x(5, 5));