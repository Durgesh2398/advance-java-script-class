//myFunction(...iterableObj);
//function myFunction(x, y, z) { }
// var args = [0, 1, 2];
// myFunction(...args);
// function myFunction(v, w, x, y, z) { }
// var args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);


function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
//console.log(sum.apply(null, numbers));

var dateFields = [1970, 0, 1];  // 1 Jan 1970
var d = new Date(...dateFields);
console.log(d);

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
var mergedObj = { ...obj1, ...obj2 };
console.log(clonedObj);
console.log(mergedObj);