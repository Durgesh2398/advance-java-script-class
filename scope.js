// Scoping is determining where variables, functions, and objects are accessible in your code during runtime. This means the scope of a variable(where it can be accessed) is controlled by the location of the variable declaration.
// In Javascript, there are two scopes:
// Global Scope
// Local Scope
// Global Scope
// There is only one Global scope throughout a JavaScript document. A variable is in the Global scope if it’s defined outside of a function.

// You can also access and alter any variable declared in a global scope from any other scope.
// Local Scope
// Variables declared within a function are in the local scope. Local scope is also called function scope because local scope is created by functions in Javascript. Variables in the local scope are only accessible within the function in which they are defined, i.e they are bound to their respective functions each having different scopes. This allows us to create variables that have the same name and can be used in different functions.


function exampleFunction() {
    var x = "declared inside function";  // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

console.log(x);  // Causes error


var x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);


//-------------------------------------------------
var name = 'Hammad';

console.log(name); // logs 'Hammad'

function logName() {
    console.log(name); // 'name' is accessible here and everywhere else
}

logName(); // logs 'Hammad'

//-------------------------------------------------
if (true) {
    // this 'if' conditional block doesn't create a new scope
    var name = 'Hammad'; // name is still in the global scope
}

console.log(name); // logs 'Hammad'


//-------------------------------------------------

if (true) {
    // this 'if' conditional block doesn't create a scope

    // name is in the global scope because of the 'var' keyword
    var name = 'Hammad';
    // likes is in the local scope because of the 'let' keyword
    let likes = 'Coding';
    // skills is in the local scope because of the 'const' keyword
    const skills = 'JavaScript and PHP';
}

console.log(name); // logs 'Hammad'
console.log(likes); // Uncaught ReferenceError: likes is not defined
console.log(skills); // Uncaught ReferenceError: skills is not defined



//context--------------------------------------------------

// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
console.log(this);

function logFunction() {
    console.log(this);
}
// logs: Window {speechSynthesis: SpeechSynthesis, caches: CacheStorage, localStorage: Storage…}
// because logFunction() is not a property of an object
logFunction(); 


//Lexcial----------------------------------------------------

function grandfather() {
    var name = 'Hammad';
    console.log(name);    
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        console.log(name);
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}
grandfather();