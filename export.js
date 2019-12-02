// // export an array
// export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// // export a constant
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // export a class
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

let area = function (length, breadth) { 
    let a = length * breadth; 
    console.log('Area of the rectangle is ' + a + ' square unit'); 
} 
  
// Perimeter function 
let perimeter = function (length, breadth) { 
    let p = 2 * (length + breadth); 
    console.log('Perimeter of the rectangle is ' + p + ' unit'); 
} 
  
// Making all functions available in this 
// module to exports that we have made 
// so that we can import this module and 
// use these functions whenever we want. 
module.exports = { 
    area, 
    perimeter 
} 