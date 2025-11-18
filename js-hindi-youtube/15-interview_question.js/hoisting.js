/** 
What is Hoisting in js :- Hoisting is JavaScript's behaviour of moving declarations to the top of their scope
during the compilation before the code actually runs.
- Only declarations are hoisted, not initializations.

=> function declarations are properly hoisted (not arrow function).
=> var is hoisted. But let, const are not hoisted.
**/

//Ex:-
/*
myPlace = "Patna"; // var is hoisted. Veriable value is Hoisted only for.
console.log(myPlace);
var myPlace; // Variable Declaration
*/

//(or) function Declaration
/*
function sayHi() {
  var Name;
  console.log(Name); // undefined because declaration hoisted but initialization is not
  Name = "Kumar";
}
sayHi();
*/

// (or) This function name is function Declaration. and Hoisting is Possible.
/*
sayHi();
function sayHi() {
  console.log(Name); // undefined because declaration hoisted but initialization is not
  var Name = "Kumar";
}
*/

// (or) function Declaration
/*
sayHi();
function sayHi() {
  Name = "Kumar";
  console.log(Name); // Kumar because initialization hoisted also
  var Name;
}
*/

//Ex:- Arrow function and function expression are not hoisted.
/*
sayHello(); //Not valid calling Error
let sayHello = () => {
  var myName;
  console.log(myName);
  myName = "Ajit";
};
*/

//(or) function expression
/*
sayHello(); //Not valid calling Error
// Yaha pe Dekho to pura function one veriable me store kiya hai. yeha pe function ko initialization kiya hai.
var sayHello = function () {
  var myName;
  console.log(myName);
  myName = "Ajit";
};
*/
