// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment
var x = 100;



// Attempt to use a variable before declaring it
console.log(x);

// Variable assignment without var
x = 100;



// The code we wrote
console.log(x);
var x = 100;

// How JavaScript interpreted it
var x;
console.log(x);
x = 100;



// Initialize x in the global scope
var x = 100;

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log(x);
}

hoist();