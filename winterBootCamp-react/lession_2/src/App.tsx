// useEffect 
// 1. What is useEffect?
// useEffect lets you synchronize a React component with external systems.

// import { useState } from "react";



// Examples:
// - Fetching data from an API.
// - Setting browser document titles.
// - Setting up event listeners.
// - Working with timers.
// - Connecting to WebSockets.
// - Cleaning up subscriptions.

/* 
  import { useEffect } from "react";

  useEffect(() => {
    // Side effect logic

    return () => {
      // Cleanup logic (optional)
    };
  }, [dependencies]);


*/
// import { useEffect, useState } from "react";

// export function App() {

//   const [count, setCount] = useState(0);

//   useEffect(()=>{
//     document.title = `count : ${count}`
//   },[count]);

//   return (
//     <>
//       {count}
//       <br />
//       <button onClick={() => setCount(c => c+1)}>
//         increment 
//       </button>
//     </>
//   );
// }

// export default App;





// Exercise 1
// Create a counter application using useState and useEffect.

// Requirements:
// 1. Initial count should be 0.
// 2. Add Increment and Decrement buttons.
// 3. Display the current count.
// 4. Whenever count changes, print this message in the console:


// Answer 
// import { useEffect, useState } from "react";

// export function App() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count has changed : ${count}`);

//   }, [count])

//   return (
//     <>
//       <h1>Counter Application </h1>
//       <h2>{count} </h2>
//       <button onClick={() => setCount(c =>c+1)}>Increment</button>
//       <button onClick={() => setCount(c =>c-1)}>Decrement</button>
//     </>
//   );
// }

// export default App;

/*
2. Next concept — Cleanup functions
Why do we need cleanup?

Imagine your component starts a timer using setInterval().

When the component disappears, the timer shouldn't continue running unnecessarily.

That's where the cleanup function comes in.


Basic structure:
useEffect(() => {

  // Setup logic

  return () => {
    // Cleanup logic
  };

}, []);

*/



// Exercise 2 — Timer
// Build a timer application using useEffect and useState.

// Requirements:
// 1. Display a timer starting at 0.
// 2. Increase the timer every second.
// 3. Use setInterval().
// 4. Use clearInterval() inside the cleanup function.
// 5. Stop the interval when the component unmounts.

// import { useEffect, useState } from "react";
// export function App() {

//   const [count, setCount] = useState(0);

//   useEffect(() => {

//     const interval = setInterval(() => {
//       setCount(c => c + 1 )
//     },1000)

//     return () => {
//       clearInterval(interval);
//     }
//   }, [])

//   return (
//     <>
//       <h1>Timer Application </h1>
//       <h2>{count} </h2>
//     </>
//   );
// }

// export default App;


// Exercise — Build a Stopwatch with React
// useState + useEffect + Cleanup Intermediate

// Your task is to build a functional stopwatch using React and TypeScript.

// import { useEffect, useState } from "react";


// function Stopwatch() {

//   const [count, setCount] = useState(0);
//   const [isRunning, setIsRunning] = useState(false)

//   function handleReset() {
//     setCount(0);
//     setIsRunning(false)
//   }
//   useEffect(() => {
//     if (!isRunning) return;

//     const interval = setInterval(() => {
//       setCount(c => c + 1)
//     }, 1000)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [isRunning])


//   return (
//     <>
//       <div>
//         <p>Stopwatch</p>

//         <div>
//           {count}
//         </div>

//         <button type="button" onClick={() => setIsRunning(true)}>
//           Start
//         </button>

//         <button type="button" onClick={() => setIsRunning(false)}>
//           Stop
//         </button>

//         <button type="button" onClick={handleReset}>
//           Reset
//         </button>

//       </div>
//     </>
//   );
// }

// export function App() {
//   const [showStopwatch, setShowStopwatch] = useState(true);

//   return (
//     <>
//       <h1>Stopwatch Application</h1>

//       <button onClick={() => setShowStopwatch(c => !c)}>
//         {showStopwatch ? " unmount Stopwatch" : "Mount Stopwatch"}
//       </button>

//       {showStopwatch && <Stopwatch />}
//     </>
//   )
// }

// export default App;








// useEffect — Part 3: Event listeners and cleanup

// import { useEffect} from "react";

// export function App() {
//   const [windowWidth , setWindowWitdh] = useState(window.innerWidth);

//   useEffect(() => {

//     const handleResize = () => {
//       setWindowWitdh(window.innerWidth)
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };

//   }, []);


//   return (
//     <>
//       {windowWidth}
//     </>
//   )
// }

// export default App;

// import { useEffect, useState} from "react";

// export function App() {
//   const [windowWidth , setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     }
//     window.addEventListener("resize" , handleResize)

//     return () => {
//       window.removeEventListener("resize" , handleResize)
//     }
//   }, []);

//   return (
//     <>
//       {windowWidth}px
//     </>
//   )
// }

// export default App;






// Next topic — API Fetching with useEffect
// New module
// Now we'll learn how React communicates with backend APIs.

// We'll use JSONPlaceholder, a public testing API.
// React Exercise — API Fetching with useEffect
// React + TypeScript
//  Intermediate


// Build a Users Dashboard using the JSONPlaceholder API.

// API endpoint: https://jsonplaceholder.typicode.com/users
// Requirements
// 1. Define a TypeScript type

// Create a User type containing:
// - id: number
// - name: string
// - email: string
// - username: string
// 2. Create three state variables
// - users — stores the API response.
// - loading — tracks the loading status.
// - error — stores an error message.
// 3. Fetch users
// - Use useEffect.
// - Use fetch() with async/await.
// - Fetch data when the component mounts.
// - Check response.ok.
// - Convert the response using response.json().
// - Store the response using setUsers().
// 4. Handle loading and errors
// - Display Loading users... while fetching.
// - Display an error message if the request fails.
// - Use try, catch and finally.
// 5. Display users
// - Use .map() to render users.
// - Display name, username and email.
// - Use user.id as the React key.
// 6. Implement cleanup
// - Create an AbortController.
// - Pass controller.signal to fetch().
// - Cancel the request inside the useEffect cleanup.
// - Handle aborted requests separately from genuine API errors.
// Submission checklist
// Exercise progress

// 0/8

// [ ] Define User type
// [ ] Create users, loading and error states
// [ ] Implement fetch using async/await
// [ ] Check response.ok
// [ ] Store API response
// [ ] Handle loading and errors
// [ ] Render users using map()
// [ ] Implement AbortController cleanup

// Your task: Implement the complete Users Dashboard in App.tsx using Bun, React and TypeScript.

// No Search Users functionality in this exercise.


import { useEffect, useState } from "react";

type User = {
  id: number,
  name: string,
  email: string,
  username: string
}

export function App() {

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async() => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/", 
          {
            signal : controller.signal
          }
        )
        if(!response.ok){
          throw new Error(`HTTP Error: ${response.status}`);
        }

        const data : User [] = await response.json();

        setUsers(data);

      } catch (error) {

        if (controller.signal.aborted) {
          return;
        }
      
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong"
        );

      }finally{
        if(!controller.signal.aborted){
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    }
  }, [])

  return (
    <>
      <div>
        <h3>API Fetching with useEffect</h3>
        {loading ? <p>Loading users.......</p> : error ? (
          <p>Error : {error} </p>
        ) : (
            <ul>
              {users.map((user) =>
              (
                <li key={user.id}>
                  <h3>{user.name}</h3>
                  <p>Username : {user.username}</p>
                  <p>Email : {user.email}</p>
                </li>
              ))}
            </ul>
        )}
      </div>
    </>
  )
}

export default App;



