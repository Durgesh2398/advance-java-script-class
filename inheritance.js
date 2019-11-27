function Person(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };

  Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };

  function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }

  function Teacher(first, last, age, gender, interests, subject) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.subject = subject;
  }


  function Brick() {
    this.width = 10;
    this.height = 20;
  }



  function BlueGlassBrick() {
    Brick.call(this);
  
    this.opacity = 0.5;
    this.color = 'blue';
  }


  Teacher.prototype = Object.create(Person.prototype);


  Object.defineProperty(Teacher.prototype, 'constructor', { 
    value: Teacher, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });


    Teacher.prototype.greeting = function() {
        let prefix;
      
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          prefix = 'Mr.';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          prefix = 'Mrs.';
        } else {
          prefix = 'Mx.';
        }
      
        alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
      };




      let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
      
      teacher1.name.first;
      teacher1.interests[0];
      teacher1.bio();
      teacher1.subject;
      teacher1.greeting();
      teacher1.farewell();




      class Person {
        constructor(first, last, age, gender, interests) {
          this.name = {
            first,
            last
          };
          this.age = age;
          this.gender = gender;
          this.interests = interests;
        }
      
        greeting() {
          console.log(`Hi! I'm ${this.name.first}`);
        };
      
        farewell() {
          console.log(`${this.name.first} has left the building. Bye for now!`);
        };
      }


      let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();
// Leia has left the building. Bye for now





class Teacher extends Person {
    constructor(subject, grade) {
      this.subject = subject;
      this.grade = grade;
    }
  }


  class Teacher extends Person {
    constructor(subject, grade) { 
      super(); // Now 'this' is initialized by calling the parent constructor.
      this.subject = subject;   
      this.grade = grade; 
    }
  }


  constructor(first, last, age, gender, interests) { 
    this.name = {   
      first,   
      last   
    }; 
    this.age = age; 
    this.gender = gender;   
    this.interests = interests; 
 } 





 class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
  
      // subject and grade are specific to Teacher
      this.subject = subject;
      this.grade = grade;
    }
  }
  


  let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
  snape.greeting(); // Hi! I'm Severus.
  snape.farewell(); // Severus has left the building. Bye for now.
  snape.age // 58
  snape.subject; // Dark arts








  class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
      super(first, last, age, gender, interests);
      // subject and grade are specific to Teacher
      this._subject = subject;
      this.grade = grade;
    }
  
    get subject() {
      return this._subject;
    }
  
    set subject(newSubject) {
      this._subject = newSubject;
    }
  }










  // Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"