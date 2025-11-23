/* What is Currying Function :- Currying is a function that takes multiple arguments is 
transformed into a series of functions, each taking a single argument.
*/
//(6) Currying Function ?
function ajit(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return function (e) {
          return a + b + c + d + e;
        };
      };
    };
  };
}
var total = ajit(5)(4)(3)(2)(1);
console.log(total);

/*************** Update code and New concept add  ***************************/
/* What is the arguments object in JavaScript?
function ArgObj() { // Arguments Object Function ke andar hota hai. isi liye function defination me without parameter hai.
  // console.log(arguments["0"], arguments["1"]);
  // console.log(arguments[0], arguments[1]);
  for (let k in arguments) {
    console.log(k, arguments[k]);
  }
}
// ArgObj("Ajit", "Kumar");
// ArgObj(10, 20);
ArgObj(10, 20, 30, 40, 50);
*/

/* Note :- Browser ke help se run kar hahe hai to "this" = ka matlab "window" ho jata hai.
agar Node.js ke help se run kar rahe hai to "this" = ka matlab "global" ho jata hai. 
*/

// Constructor Function And Proved or "note:- Promise me yehi concept use hota hai."
function Person(name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
}
/* Normal call only for function call not call Constructor and not create Object. Node.js ke help se run kar rahe hai to "this" = ka matlab "global" ho jata hai. 
Person("Ajit", 24);
*/
/* Constructor Call and create Object. or Res ko this represent kar raha hai. Browser ke help se run kar hahe hai to "this" = ka matlab "window" ho jata hai.
let Res = new Person("Ajit", 24);
console.log(Res);
*/
