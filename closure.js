var warnUser = function (msg) {
    var calledCount = 0;
    return function() {
       calledCount++;
       console.log(calledCount);
       //alert(msg + '\nYou have been warned ' + calledCount + ' times.');
    };
};

var warnForTamper = warnUser('You can not tamper with our HTML.');
warnForTamper();
warnForTamper();


let name = "John";

function sayHi() {
  alert("Hi, " + name);
  console.log(name);
}

name = "Pete";

sayHi()


function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
        console.log(name);
    };
  }
  
  let name = "John";
  

  let work = makeWorker();
  
  work();



function sayHiBye(firstName, lastName) {

    function getFullName() {
      return firstName + " " + lastName;
    }
  
    alert( "Hello, " + getFullName() );
    alert( "Bye, " + getFullName() );
  
  }
  sayHiBye();


  function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // has access to the outer "count"
    };
  }
  
  let counter = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2