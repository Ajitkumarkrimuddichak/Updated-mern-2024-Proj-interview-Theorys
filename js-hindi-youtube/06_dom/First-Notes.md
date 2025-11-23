<!-- **************
/* Browser Web APIs in JavaScript :- Browser ke paas bahut saare Web APIs hote hai, aur JavaScript unahi 
Web APIs ko use karke browser ke features access karta hai.

Common Web APIs in Browser (jo JS me use hote hain) :-

1. Fetch API :- Server se data fetch karne ke liye.
Example :-
fetch("https://api.example.com/data").then(res => res.json()).then(data => console.log(data));

2. Console API :- Debugging logs show karne ke liye.
Example :- console.log("This is a message");

3. LocalStorage / SessionStorage API :- Browser me data store karne ke liye.
Example :- localStorage.setItem("name", "Ajit");

4. Timer API (setTimeout / setInterval) :- Delay ya repeated function run karne ke liye.
Example :-
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);

5. DOM API (Document Object Model) :- HTML elements ko access, change, delete karne ke liye.
Example :- document.getElementById("title").textContent = "Hello World!";

6. What is DOM :- DOM is a Web API provided by the browser that represents the webpage as 
a tree structure, allowing JavaScript to interact with and modify HTML elements dynamically.

7. Why Dom is important ? :- 
- Access elements (like getElementById, querySelector).
- Change content (like textContent, innerHTML).
- Handle events (like addEventListener).
- Create/Delete elements (like createElement, removeChild).
*/
*************-->


<!-- Search Google and Live  modifed website Ex:- https://en.wikipedia.org/wiki/Brendan_Eich -->

<!-- step 1 Ye Pura inspect kar ke right down kare  

console.log(window) ke bare me padh sakate hai or kya-kya rahata hai 

console.log(window.document) 
(or) console.log(document) likhane sakate hai kyo ki itana pata rahata hai browser ko
(or) All information dekhana hai to console.dir(document)
-->

<!-- step 2  interview me Digrame banane ke liye bhi deta hai /Document Object Model/HTML Boiler-Plate ka
-->

<!--step 3 DOM Manipulation /Wikipedia ka Text heading ko change karana hai to console.log(document.) likhane se bahut sara information milata hai jisase access kar ke change kar sakate hai tempory
Ex:- console.log(document.links),console.log(document.links[2])...isi tarah se web-page ko access kiya ja sakata hai
-->

<!-- step 4 Selecter element ko used kar ke wikipedia ke text change kar sakate hai  
Ex:- document.getElementById('firstHeading'),
document.getElementById('firstHeading').innerHTML = "<h1>Ajit kumar</h1>"

document.querySelectorAll('h2') // Node list mil jayega
const allH2 = document.querySelectorAll('h2')
allH2[0].innerText

const myH2 = document.querySelectorAll('.mw-headline')
myH2[0].innerText

myH2.forEach(function(h){
    h.style.color = 'red'
})
-->
