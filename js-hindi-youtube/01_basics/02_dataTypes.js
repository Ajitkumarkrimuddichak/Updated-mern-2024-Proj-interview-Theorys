"use strict"; // Treat all JS code as new version / mantane secore code.

// alert(3 + 3) // we are using nodejs, not used browser

console.log(3 + 3); //code readability should be high
console.log("Ajit");

let name = "ajit";
let age = 18;
let isLoggedIn = false;
let state;

// What is data Types ? :- Classification that specifies which type of value.

/****(1) Primitive Data type :- Used stack Memory , Call by value hote hai, 
used in Deep copy ****/

// number => 2 to power 53
// bigint => 1234567891021
// string => "Ajit"
// boolean => true/false
// null => standalone value / Object
// undefined => undefined
// symbol => unique
console.log(typeof undefined); // undefined
console.log(typeof null); // object

/**** (2) Non Primitive Data type :- used Heap Memory ,Return Hamesa Object hi karata hai, 
Call by Reference ,used in shallow copies ****/

// Class
// Object
// Array
// Regular Expression
// Function

/**(1) Primitive Data type :- Used stack Memory , Call by value hote hai, used in Deep copy
 Call by Value :-
 - JavaScript copies the actual value into the function’s argument.
 - Any changes inside the function don’t affect the original variable.
**/
let a = 10;
function changeValue(num) {
  num = 20; // changes local copy
}
console.log(changeValue(a)); // undefined
console.log(a); // Output: 10 original value not affected)

// Deep Copy
/*
A deep copy creates a completely independent clone — all nested objects and arrays are duplicated.
Changes in one object don’t affect the other.
Ways to make a deep copy:-
- JSON.parse(JSON.stringify(obj))
- structuredClone(obj) (modern way)
- Using libraries like Lodash’s cloneDeep()
*/
let person = {
  name: "Ajit",
  address: {
    city: "Delhi"
  }
};
// Deep copy using structuredClone (modern)
let deepCopy = structuredClone(person);
deepCopy.address.city = "Mumbai";
console.log(person.address.city); // Output: "Delhi" (original unaffected)


/** (2) Non Primitive Data type :- used Heap Memory ,Return Hamesa Object hi karata hai, 
Call by Reference ,used in shallow copies.

Call by Reference, the reference (memory address) of the variable is passed to the function.
This means both the original variable and the function parameter point to the same memory location.
So, any changes made inside the function directly affect the original object or array.
**/
let obj = { name: "Ajit" };
function changeName(user) {
  user.name = "Kumar"; // modifies the original object
}
changeName(obj);
console.log(obj.name); // Output: "Kumar" (original object changed)

/*  Shallow Copy :- A shallow copy copies only the first level of an object. Nested objects still share the same reference.
Methods to make shallow copies :- 
- Object.assign({}, obj)
- { ...obj } (spread operator)
- Array.prototype.slice()
- Array.prototype.concat()
*/
let person = {
  name: "Ajit",
  address: {
    city: "Delhi"
  }
};
// Shallow copy using spread
let shallowCopy = { ...person };
shallowCopy.address.city = "Mumbai";
console.log(person.address.city); // Output: "Mumbai"


// What is Arithmetic Instruction ?
// Ans:- An Instruction which is used to manipulate data using operators is known as Arithmetic Instruction.
// Ex:- 3+4*5
// Not equal (!=):- Checks if two operands are not equal.
// Strict not equal (!==):- Checks if two operands are not equal or not same type.

//1. Arithmetic Operators :- + - * ** / % ++ --
//2. Assignment Operators :- = += -= *= /= %= **=
//3. Comparison Operators :- == === != !== > < >= <=
//4. Logical Operators :- && || !  ( ! Logical NOT Returns true if the operand is false)
//5. Ternary Operators :- ? : ;
//6. Bitwise Operators :- & | ^ ~ << >> ( Bitwise NOT (~))

/* What is Control Instruction/Statements ? :- Control statements in javascript are instruction 
that determine the flow of execution of code, whether it
should be executed, skipped or repeated.
*/
// i) Decision control Instruction
// ii) Iterative control Instruction / Loops :- A loop is used to excuite a statement block depending on a condition
// iii) Switch case control Instruction
// iv) Goto control Instruction


//// ********************************* ////
/* Note :- JS me Veriable Declared 4 Types se kar sakate hai

var a = 5;
let b = 6;
const c = 7;
d = 8; //Dynamic typed language me without keyword ke bhi variable declare kar sakate hai js me. jis type ke value assigne karoge usi type ke keyword ko automatic lega.
// int e = 20;// static typed language me aise declare karate hai jaise c, c++, java etc pahale batana hoga keyword ko.
function f1() {
  var x = 10;
  y = 20; // Without Keyword used kiye huye declared karate hai to global veriable mana jata hai js me.
  console.log(x, y);
}
f1();
console.log("This Variable is Global =", y);
*/


