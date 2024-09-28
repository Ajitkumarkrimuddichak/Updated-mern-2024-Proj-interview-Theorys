/* (1). What is Node.js? Where can you use it?
Ans:- Node.js is an open-source, crossplatform JavaScript runtime environment. And 
It is used to create server-side web applications.

(2). Why use Node.js? 
Ans:- 
- It is generally fast 
- It rarely blocks 
- It is input/output bound, Data streaming Applications. 
- It is Real time chat Application.
 
(3). How does Node.js work? 
Ans:- Clients send requests to the webserver to interact with the web application.
- Requests can be non-blocking or blocking:- Querying for data Deleting data Updating 
the data Node.js retrieves the incoming requests and adds those to the Event Queue 
The requests are then passed one-by-one through the Event Loop.
 
(4). What are the features of NodeJS ?
And:-
- No buffering 
- Library used is JavaScript 
- Very fast in code execution 
- Single thread ascendibl
 
(5). Why is Node.js Single-threaded? 
Ans :- Node.js is single-threaded for async processing. By doing async processing on a 
single-thread under typical web loads, more performance and scalability can be achieved 
instead of the typical thread-based implementation.

(6). If Node.js is single-threaded, then how does it handle concurrency? 
Ans :- Single-Threaded Event Loop Model. JavaScript Eventbased model and the 
JavaScript callback system. A Node.js can easily manage more concurrent client requests. 

(7). Explain callback in Node.js?
Ans :- A callback function is called after a given task. It allows other code to be 
run. All APIs of Node are written to support callbacks.

(8). How is Node.js most frequently used? 
Ans :- Real-time chats , (Single-Page Applications) Real-time collaboration tools Streaming
applications Microservices architecture.

(9). What are some of the most commonly used libraries in Node.js? 
Ans:- Express.js, Mongoose. 

(10). What is the command used to import external libraries? 
Ans:- Ex:- “ const http=require (“HTTP”).”  This will load the HTTP library and the single 
exported object through the HTTP variable.

(11). What is the control flow function? 
Ans:- The control flow function is a piece of code that runs in between several 
asynchronous function calls.

(12). How does control flow manage the function calls?
Ans:- function-calls.

(13). Explain the concept of middleware in Node.js.?
Ans :- Middleware is a function that receives the request and response objects. Most 
tasks that the middleware functions perform are:
Execute any code Update or modify the request and the response objects Finish the 
request-response cycle Invoke the next middleware in the stack.

(14). What are the different types of HTTP requests? 
Ans:- HTTP defines a set of request methods used to perform desired actions. 
The request methods include:- 
- GET: Used to retrieve the data 
- POST: Generally used to make a change in state or reactions on the server
- HEAD: Similar to the GET method, but asks for the response without the response body
- DELETE: Used to delete the predetermined resource

(15). Does Node run on Windows?
Ans:- Yes, Node.js runs on Windows. Node.js is a cross-platform runtime environment, 
which means that it can run on a variety of operating systems, including Windows, macOS, 
and Linux.
 
(16). Can you access DOM in Node?
Ans:- No.

(17). What are global objects in Node.js? 
Ans:- process, console, and buffer.

(18). What is an Event Emitter in Node.js? 
Ans:- An Event Emitter is a Node.js module that facilitates communication between objects 
in a Node.js application. 

(19). Where is package.json used in Node.js? 
Ans:- The package.json file is located in the root directory of an application and it 
is used by the npm package manager to install and manage the dependencies of an application.
 
(20). Does Node.js provide any Debugger?
Ans:- Yes.

All Theory All_mern_Theory me hai............
*/
