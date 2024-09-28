/* 1). What is React? 
Ans:- React is a front-end JavaScript library developed by Facebook in 2011. It 
follows the component based approach which helps in building reusable UI components.

2). What are the features of React?
Ans:- 
- It is uses the virtual DOM 
- It is use server-side rendering 
- uni-directional data flow 
- JSX (JavaScript Syntax)
- It is One-way Data Binding
- Component-Based Architecture

3). Why to used React.js? :- 
- virtual DOM
- Easy to Learn
- Reusable Components
- Fast rendering
- Strong community support
- Great Developer tools

4). When to used React.js? :- 
- Dynamic Web Applications
- Single-Page Applications (SPAs)
- Mobile Application Development
- SEO-Friendly Applications
- Component-Based Architecture
- Large-Scale Applications 

6). Differentiate between Real DOM and Virtual DOM.?
Angular.js :- Real DOM.
- It updates slow.
- Directly update HTML.
- Creates a new DOM if element updates.  
- memory wastage. 

React.js :- Virtual DOM.
- It updates faster.
- Can not directly update HTML.
- Updates the JSX if element updates.
- No memory wastage

7). How to work  Virtual DOM in React?  
Ans:- Render an application user interface, React creates a virtual DOM tree representing 
that UI and stores in memory.

8). How React.js Works?
Ans:- React one virtual dom create karata hai or all components ko vertual dom me 
rakh kar next time kuchh change karate hai component me to new vertual dom create 
hota hai fir old or new dom me compare karata hai or change hota hai.

9). What are the limitations of React? 
- Lack of Proper Documentation
- Development Speed
- JSX Complexity
- Problems With SEO

10). Why can not browsers read JSX? 
Ans:- Browsers can only read JavaScript objects but JSX in not a regular JavaScript object.
JavaScript object using JSX transformers like Babel and then pass it to the browser.

11). What is the purpose of render() in React? 
Ans :- Each React component must have a render() mandatorily. It returns a single 
React element.

12). What is Props?
Ans:- Props is the shorthand for Properties in React. They are read-only components. 
passed down from the parent to the child components throughout the application. A 
child component can never send a prop back to the parent component.

13). What is a state in React and how is it used? 
Ans:- The State is a way to store and manage the information or data while creating a 
React Application. The state is a JavaScript object that contains the real-time data or 
information on the webpage.

(or) Differents between State vs Props
- State is an object where you store the property that belongs to the component.
- State is local to the component and can be changed within the component.

- Props are the properties which are passed to the component Externally.
- Props are read-only and passed down from parent to child components.

14). What is an event in React? 
Ans:- specific actions like mouse hover, mouse click, key press, etc. Handling.

15) What do you understand by refs in React?
Ans:- Refs is the short hand for References in React. It is an attribute which helps 
to store a reference to a particular React element or component, which will be 
returned by the components render configuration function. It is used to return 
references to a particular element or component returned by render(). They come in 
handy when we need DOM measurements or to add methods to the components.

16). List some of the cases when you should use Refs?
Ans:- Select text or media playback.

17). What are Higher Order Components(HOC)? 
Ans:- Higher Order Component is an advanced way of reusing the component logic. are 
custom components which wrap another component.

18). What are Pure Components?
Ans:- Pure components are the simplest and fastest components which can be 
written.They can replace any component which only has a render().

19). What is the significance of keys in React?
Ans:- Keys are used for identifying unique Virtual DOM Elements with their 
corresponding data driving the UI.

20) what is React Router?
Ans :- React Router is a standard library for routing in React. 
 
21). Explain the concept of a Pure Component in React Class based ?
Ans:- Pure Component is a component that renders the same output for the same state and 
props. It’s a performance optimization technique that ensures a component re-renders only
when there is a change in the state or props.
 
22). How do you handle error handling in a React application?
Ans:- 
- Error Boundaries 
- Try-Catch for Event Handlers
- Error Handling in Asynchronous Code
- Graceful Fallback UI 
- Prop Validation

23). How to manage Global State manage ? :- 
- Props
- Context API 
- Redux

24). What is Context API?
Ans:- Context API is used to pass global variables anywhere in the code. It helps when 
there is a need for sharing state between a lot of nested components. 

25). Why is context API used?
Ans:- Context API solves the problem of prop drilling in React. Prop Drilling occurs when 
data is to be passed between multiple layers before finally sending it to the required 
component.

26). What is Prop Drilling?
Ans:- Anyone who has worked in React would have faced this and if not then will face it 
definitely. Prop drilling is basically a situation when the same data is being sent at 
almost every level due to requirements in the final level. Here is a diagram to 
demonstrate it better. Data needed to be sent from Parent to ChildC. In this article 
different ways to do that are discussed.

27). What is Controlled Components ? 
Ans:- A controlled component is a form element (such as an input, textarea, or select) 
whose value is controlled by React state. The value of the input is tied directly to the 
component’s state, and any changes to the input are handled by event handlers that update 
the state.

- React used in Controlled Components.
- <input type="text" value={value} onChange={handleChange} /> , Pahachan

//Ex:- 
import React, { useState } from 'react';
function ControlledForm() {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ControlledForm;

28). What is Uncontrolled Components ? 
Ans:- An uncontrolled component is a form element whose value is managed by the DOM rather 
than React state. React does not control the input's value directly; instead, it accesses 
the value using a ref.

- Uncontrolled input are like traditional HTML form input.
- Uncontrolled Components me useRef hook used.
- It like a useState only and its "preserve/kisi jichh ko hold kar ke rakhana" the value. 
But useRef No Rerender components.

//Ex:-
import React, { useRef } from 'react';
function UncontrolledForm() {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted value:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default UncontrolledForm;

*/
