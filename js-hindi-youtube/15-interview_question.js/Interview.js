
/*
(1) What is Event Delegation :- Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of 
adding separate listeners to multiple child elements. 
Ex:- 
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  // Select parent element
  const list = document.getElementById('myList');

  // Add event listener to parent
  list.addEventListener('click', function(event) {
    // Check if clicked element is a <li>
    if(event.target.tagName === 'LI') {
      alert('You clicked: ' + event.target.textContent);
    }
  });
</script>


(2) What is difference between Promises and async/await in JavaScript :- 
Promise
- Promise is an object representing the eventual completion or failure of an async operation.
- It uses .then() for success and .catch() for errors.
- Can lead to nested .then() chains if multiple async calls are used.
- Starts execution immediately when created.
- Error handling is done using .catch() method.

async/await 
- async/await is syntactic sugar over Promises for cleaner code.
- await pauses the function execution until the Promise resolves.
- Makes asynchronous code look like synchronous code, improving readability.
- Uses try...catch blocks for error handling.
- The function automatically returns a Promise.


(3) How JavaScript works :- JavaScript is a single-threaded, interpreted language that runs in the browser or Node.js. It executes code line by line using 
a call stack and handles asynchronous tasks like timers, HTTP requests, or events using the event loop and Web APIs. This allows JS to be non-blocking even
though it’s single-threaded.

(4) How does JavaScript execute in the browser :- JavaScript in the browser is single-threaded and executes synchronously, line by line, using a call stack where 
  each function waits for the previous one to finish before running.
  
(5) How does JavaScript handle tasks like API calls without blocking the main thread / What does it mean when code runs asynchronously? :- 
Writing asynchronous code means running tasks in the background (like API calls or timers) without stopping the main program, allowing other code to
execute simultaneously.

(6) What is Different between Authentication vs Authorization :- 
(1) Authentication is verifying who a user is. For example, when a user logs in with a username and password, the system checks their identity.
(2) Authorization is checking what an authenticated user is allowed to do. For example, after login, only admin users can access the admin panel, while 
normal users cannot.

(7) All major ES6 features :- 
- let and const
- Arrow Functions
- Template Literals
- Default Parameters
- Destructuring (Arrays & Objects)
- Rest and Spread Operators
- Enhanced Object Literals
- Modules (import / export)
- Classes
- Promises
- Map and Set
- Generators (function* and yield)
- New String, Number, and Math Methods
