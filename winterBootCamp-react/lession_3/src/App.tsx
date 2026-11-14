// 1. What is useRef?
// useRef allows you to:
// 1. Access and interact with DOM elements.
// 2. Store values that persist between renders.
// 3. Change a value without triggering a re-render.
// Basic syntax:
// const inputRef = useRef<HTMLInputElement>(null);


// Unlike useState, updating ref.current does not trigger a component re-render.

import { useEffect, useRef, useState } from "react";

// Use case 1 - Prevent re-rendering 
// export function App() {

//   const [name , setName ] = useState("");
//   const renderCount = useRef(0); // returns a object with  {counter : 0} 

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1
//   })

//   return (
//    <>
//    {renderCount.current}
//    </>
//   );
// }

// export default App;


// Important Use case 
// export function App() {

//   const [name , setName ] = useState("");
//   const inputRef = useRef(); // returns a object with  {counter : 0} 


//   const focus = () => {
//     inputRef.current.focus()
//   }
//   return (
//    <>
//    <input ref={inputRef} type="text"  value={name} onChange={(e) =>  setName(e.target.value)}/>
//    <div>My name is {name }</div>
//     <button onClick={focus}>Focus</button>

//    </>
//   );
// }

// export default App;

// use case  3

// export function App() {

//   const [name, setName] = useState("");
//   const prevName = useRef(''); // returns a object with  {counter : 0} 

//   useEffect(() => {
//     prevName.current = name;
//   }, [name]);


//   return (
//     <>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name} and it used to be {prevName.current}</div>

//     </>
//   );
// }

// export default App;

// 2. Where do we use useRef?
// Common use cases:
// - Automatically focus an input.
// - Access DOM elements.
// - Store timer IDs.
// - Track previous values.
// - Store mutable values between renders.


// export function App() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function focus() {
//     inputRef.current?.focus()
//   }
//   function handleClear(){
//     if(inputRef.current){
//       inputRef.current.value = "";
//       inputRef.current.focus();
//     }
//   }
//   return (
//     <>
//     <input ref={inputRef} type="text" placeholder="Enter your name " />
//     <button type="button" onClick={focus}>Focus Input</button>
//     <button type="button" onClick={handleClear} >Clear Input </button>
//     </>
//   );
// }


// export default App;







// useRef — Exercise 2: Previous Value Tracker
// Intermediate
//  React + TypeScript


// Now let's understand how useRef preserves values between renders without triggering additional renders.
// 1. Expected UI
// Previous Value Tracker
// Current Count
// 5

// Previous Count
// 4


// Increment
// Decrement
// Reset

// Illustrative UI — the values change as you interact.
// 2. Requirements
// Build this application with useState, useRef and useEffect.
// 1. Create a counter initialized to 0.
// 2. Create Increment, Decrement and Reset buttons.
// 3. Store the previous count using useRef.
// 4. Update the previous count whenever the current count changes.
// 5. Display both current and previous counts.
// 6. On the initial render, display None as the previous count.
// 7. Updating the ref must not trigger an additional render.



export function App() {
  const [count , setCount ] = useState(0);

  const prevCount = useRef<number | null >(null);

  useEffect(() => {
    prevCount.current = count
  },[count])

  return (
    <>
      <div>
        <p>Current Count : {count}</p>
        <p>Previous Count : {prevCount.current}</p>
        <button onClick={() => setCount(c => c+1)}>Increment</button>
        <button onClick={() => setCount(c => c-1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
}


export default App;
