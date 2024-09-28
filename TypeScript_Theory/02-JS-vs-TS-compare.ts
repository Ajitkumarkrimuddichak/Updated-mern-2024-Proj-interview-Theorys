//(1)
// JS Concept
/* function calculate(num1,num2){
    return num1+num2; // This is working but file Extence .js and. but  TypeScript not working 
}
console.log(calculate('2',4)); // This is Bug.
*/

//TS Concept
// let num1:number=1; // This is working but extencion is .ts and veriables type mension and work.
/*function calculate(num1:number, num2:number){
    return num1+num2;
}
console.log(calculate(20,4)); // This is not Bug.
*/

//(2)
//JS Concept
/*function getTotal(numbers){
    return number.reduce((acc,item) => { // Typo/Typing mistake/Error. JS Problem is not show mistake. only for run the code and show the Error and Fixed Error.
        return acc + item;
    },0);
}
console.log(getTotal([2,4,6]));*/

//TS Concept
function getTotal(numbers){
    return numbers.reduce((acc,item) => { // Typo/Typing mistake/Error. TS show mistake and Fixed error before run code. "number Error"
        return acc + item;
    },0);
}
console.log(getTotal([2,4,6]));
