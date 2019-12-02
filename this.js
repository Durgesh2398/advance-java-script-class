var person = {
    firstName: "Durgesh",
    lastName : "Kumar",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName());


var person = {
    firstName: "Durgesh",
    lastName : "Kumar",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person.fullName());


  var x = this;
  console.log( x);

"use strict"
  var x = this;
console.log(x);


console.log(myFunction());
function myFunction() {
  return this;
}



"use strict";
console.log(myFunction());
function myFunction() {
  return this;
}



var person = {
    firstName  : "John",
    lastName   : "Doe",
    id     : 5566,
    myFunction : function() {
      return this;
    }
  };
  console.log(person.myFunction());



  var person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person2 = {
    firstName:"Durgesh",
    lastName: "Kumar",
  }
  var x = person1.fullName.call(person2); 
  console.log( x); 