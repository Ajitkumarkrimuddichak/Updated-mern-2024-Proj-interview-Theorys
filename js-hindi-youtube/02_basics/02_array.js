const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // push method:- Existing array pe hi kuch karata hai
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // Note merge Array

// const allHeros = marvel_heros.concat(dc_heros); // This is proper merge Array. And return new Array
// console.log(allHeros);
// console.log(allHeros[3][1]);

// const all_new_heros = [...marvel_heros, ...dc_heros]; // This is proper merge Array
// console.log(all_new_heros);
// console.log(all_new_heros[3][1]);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity); // single Array conver "flat() method" //Infinity tak dekh lijiye aap chahe to only for 2 arrays ko khali merge kara sakate hai
// console.log(real_another_array); // Actually Infinity to replace Number Ex:- 1,2... kitana array ko merge karana hai

// console.log(Array.isArray("Ajit")); //kya ye array hai , No
// console.log(Array.from("Ajit")); //convert array

// console.log(Array.from({ name: "Ajit" })); // interesting // Isako directely convert nahi kar pata hai//hamesa empty [] array dega //aap key se array banaiye // nahi to aap sare value se array banaiye

/* 
const obj = { name: "Ajit" }; // Only for "Key" , Convert in Array
const keysArray = Array.from(Object.keys(obj));
console.log(keysArray); // Output: ["name"]
*/

/*
const obj = { name: "Ajit" }; // Only for "Value" , Convert in Array
const valuesArray = Array.from(Object.values(obj));
console.log(valuesArray); // Output: ["Ajit"]
*/

/*
const obj = { name: "Ajit" };
const valuesArray = Array.from(obj.name);
console.log(valuesArray); // Output: ["A", "j", "i", "t"]
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;
//console.log(Array.of(score1, score2, score3)); //Array conver

/* Note:- array Higher-order  methods in JavaScript :-

1) array.forEach(function(currentValue, index, array) {// forEach method calls a function for each element in an array. });
2) array.map(function(currentValue, index, array) {// map applies a function to each element of an array and returns a new array. not modify the original array, skips empty elements.});
3) array.filter(function(currentValue, index, array) {// filter returns a new array containing only the elements that pass a given condition.not change original array,skips empty elements. });
4) array.reduce(function(accumulator, currentValue, index, array) {// reduce applies a function to all array elements and returns one final value.not change original array, skips empty elements. }, initialValue);
5) array.find(function(currentValue, index, array) {// find searches an array and returns the first item that matches a condition. });
*/
