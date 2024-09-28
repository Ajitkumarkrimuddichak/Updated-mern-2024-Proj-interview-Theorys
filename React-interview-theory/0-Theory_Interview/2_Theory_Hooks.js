/* 1). What is React Hooks ?
Ans:- Hooks introduced React 16.8v. It allows you to use state and other React features 
without writing a class. Hooks are the special functions. It does not work inside classes.
Hooks are reusable such as atate and lifecycle methods.

2). What is useState ?
Ans:- useState is a special function. that allows you add React state to functional 
components. It provides a way to declare and manage state variables directly within a 
function component.

3). What is useEffect ?
Ans:- useEffect Hook allows you to perform side effects in your components. 
fetching data, directly updating the DOM and timers are some side effects.

Not:- What is side effects => Side effects are basically anything that affects something
outside of the scope of the current function that's being executed. In our dashboard includes.
- useEffect hook runs asynchronously and after a render is painted to the screen.

//EX:- Examples of Side Effects ?
- Data Fetching :- Fetching data from an API or server and updating the component state 
with the result.
- DOM Manipulations:- Directly modifying the DOM elements outside of React's virtual DOM, 
such as changing element styles or properties.
- Local Storage or Session Storage:- Interacting with browser storage to save or retrieve 
data

//EX:- Why Handle Side Effects?
- Separation of Concerns
- Lifecycle Management
- Declarative Code

4). Short Circuit Evaluation with React ?
Ans:- Short Circuit Evaluation in React using logical && and || operators can be a powerful
tool for conditional rendering and handling default values.

5).What is useMemo Hook ?
Ans:- useMemo Hook to increase the performance of react application.

Note => Difference
- useMemo hook Return value is possible and value store to another variable,
but useEffect hook can not store value.
- useMemo hook return a memoized value, or Can store the result.
- usecallback hook return a memoized callback, or Can store the function.


(6). What is useReducer hook ?
Ans:- useReducer hook used for managing complex state logic in a functional component.
- Big Project and multiple state used karana ho to useReducer used hota hai.
- useReducer(reducer,initialstate) , Take two argument, first argument function,second argument
initialstate
- Reducers are "Pure functions" that take in a state and action and return a new state.
"Pure functions" :- The function does not produce any side-effects.

- Dispatch() :- We call dispatch() in our code when we want to change state.

(7). What is useContext Hook :- useContext hook makes it easy to poss data throughout
your app without manually passing Props down the tree.

Note :- Different between Prop Drilling vs Context API And useContext.
i)  Prop Drilling :-Data pass parent component to nested child component , A-->B-->C-->D
ii) Context API :- The Context API in React is a tool for managing global state in a React 
application. It allows you to share data across multiple components without having to pass 
props through every level of the component tree. 

- Context
- Provider
- Consumer <---- Remove and used useContext Hook

iii) useContext
- Context
- Provider
- useContext


(8). What is Different between useLayoutEffect vs useEffect hook.
i) useLayoutEffect Hook :- useLayoutEffect runs Synchronously after a render but before the
screen is updated.
ii) useEffect hook :- useEffect runs asynchronously and after a render is painted to
the screen.

*/
