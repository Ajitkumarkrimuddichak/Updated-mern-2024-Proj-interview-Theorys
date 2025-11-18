//(1)  Primitive (or) Call by value hote hai

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n

//(2) Reference (or) Non primitive (or) Call by Reference
// Class, Array, Objects, Functions, Regular Expression

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "Ajit",
  age: 22,
};

// const myFunction = function () {
//   console.log("Hello world");
// };
// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Primitive DataType use in Stack Memory
// Ex :- Copy hi milata hai
let myName = "Ajitkumar";
let anotherName = myName;
anotherName = "Mukulkumar";
console.log(myName);
console.log(anotherName);

// Non-Primitive DataType use in Heap Memory
//Ex:-Re-reference hi milata hai
/*let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "mukul@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.upi);*/



// ******************** 2025 Add New Concept Memory Managemant ******************//
/* 
Mermory Management in JS :- JavaScript uses automatic memory management through Garbage Collection (GC), 
which means the engine (like V8) automatically detects and removes unused objects to prevent memory leaks
*/
// 1. Stack Memory :- Primitive Data Types (number, string, boolean, null, undefined, symbol, bigint) store hote hai stack memory me. Stack memory fast hoti hai. Stack memory me data directly access kar sakate hai.
// 2. Heap Memory :- Non-Primitive Data Types (objects, arrays, functions) store hote hai heap memory me. Heap memory slow hoti hai. Heap memory me data indirectly access karte hai reference ke through.


/*
(1) Code Execution has Two Phases 
(a) Memory Creation Phase :- x Variable ke liye memory reserve hoti hai (initially undefined). add function ka pura function definition memory me store hota hai
- JavaScript creates a Global Execution Context.
- All function declarations are stored in memory with their full body.
- All var variables are allocated but set to undefined.

(b) Execution Phase :- Is phase me variables ko actual values assign ki jati hain aur functions execute hote hain.
- Code runs line-by-line.
- Variables get real values.
- Functions are executed (execution contexts are pushed to the call stack).

Example :-
var a = 5;
function f() {
  console.log(a);
}
f();
*/

/* 
2) Call Stack vs Heap
Call Stack :-
- Stores execution contexts of functions.
- Works on LIFO (Last In, First Out).
- Every time a function is called → a new execution context is added.

Heap :-
- Stores objects, arrays, functions (reference types).
- Memory for dynamic objects is allocated here.

Example :-
let obj = { name: "Ajit" };
function change(o) {
  o.name = "Ajeet";
}
change(obj);
console.log(obj.name);
*/

/* 
Execution Context (EC) :- 
- Execution Context is a conceptual environment where JavaScript code is evaluated and executed.
It contains:-
- Variable Environment – stores variables and functions
- Scope Chain – for resolving variable access
- this value – current context reference

Global Execution Context (GEC) :- 
- Global Execution Context is the default execution context created when JS code runs.
- It forms the base of all other execution contexts.
- Variables and functions declared globally are stored here.
*/

/* 
4) Lexical Environment / Variable Environment
Lexical Environment :-
- Contains variables defined in the current scope.
- Also contains a reference to its parent (outer function scope).
- Basis of scope chain and closures.

Variable Environment :-
- Stores all variables inside that specific execution context.

Closure Example :-
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const fn = outer();
fn();
*/
