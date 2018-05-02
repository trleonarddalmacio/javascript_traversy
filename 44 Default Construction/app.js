// Primitives Can be created as objects

// String
const name1 = 'Jeff'; // Primitive string
const name2 = new String('Jeff'); // Object

// name2.foo = 'bar';
// console.log(name2);

console.log (typeof name2);

if (name2 === 'Jeff'){
    console.log('Yes');
} else { console.log('no'); }

// Number
const num1 = 5; // Primitive
const num2 = new Number(5); // Object Same Above

// Boolean
const bool = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
    return x + y;
}
const getSum2 = new Function('x','y', 'return 1 + 1');

console.log(getSum2(1,1));

// Object
const john1 = {name: 'John'};
const john2 = new Object ({name: 'John'});

// Arrays
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('/\w+');