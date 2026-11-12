//Important React rule: Component names must start with a capital letter.





// function Welcome(){
//   return <h1> hello react </h1>
// }

// function App() {
//   return (
//     // reusing components 
//     <>
//       <Welcome/> 
//       <Welcome/>
//       <Welcome/>
//     </>
//   )
// }

// export default App;

/*

What is JSX?
=> JSX stands for JavaScript XML.
  It is a syntax extension that allows us to write HTML-like markup inside JavaScript.

example : const element = <h1>Hello World</h1>;

**Five JSX rules you must understand

1. Return one parent element

incorrect : 
function App() {
  return (
    <h1>Hello</h1>
    <p>Welcome</p>
  );
}

correct :
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>Welcome</p>
    </div>
  );
}

You can also use a Fragment (<>...</>) instead of adding an unnecessary DOM element.

2. Use className instead of class

<h1 className="heading">Hello</h1>


3. Use curly braces for JavaScript expressions

function App() {
  const username = "Tridip";

  return <h1>Hello, {username}</h1>;
}


4. JavaScript expressions can be calculated inside JSX

function App() {
  const a = 10;
  const b = 20;

  return <h1>Total: {a + b}</h1>;
}

5. Close every JSX tag

<img src="/profile.png" alt="Profile" />
<input type="text" />

*/

// =========== props and children ==============

// type ProfileCardProps = {
//   name : string, 
//   role : string,
//   company : string,
// }

// function ProfileCard ({name , role , company} : ProfileCardProps) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>Role : {role}</p>
//       <p>Company : {company}</p>
//     </div>
//   )
// }

// type CardProps = {
//   children : React.ReactNode;
// }

// function Card ({children} : CardProps){
//   return (
//     <div className="card">
//       {children}
//     </div>
//   )
// }

// function App() {

//   return (
//     <>
//       <ProfileCard
//         name="Tridip"
//         role="Software Developer"
//         company="Google"
//       />
//       <ProfileCard
//         name="Rahul"
//         role="Frontend Developer"
//         company="X"
//       />
//       <Card>
//         <h1>Soham</h1>
//         <p>Software Engineer</p>
//       </Card>

//     </>
//   )
// }


// ============ conditional Rendering =======================
// function App (){

//   const isLoggedIn = false;
//   return (
//     <>
//       {isLoggedIn ? <h1>Welcome Tridip </h1> : <h1>Please Login</h1>}
//     </>
//   )
// }

//================= maps and keys ======================

// function App() {

//   const languages = [
//     "java",
//     "TypeScript",
//     "c++",
//     "Python"
//   ]

//   return (
//     <>
//       <h1>Programming Language I know </h1>
//       <ul>
//         {languages.map((language) => (
//           <li key={language}>{language}</li>
//         ))}
//       </ul>

//     </>
//   )
// }

// ================== Rendering arrays of objects =================
// function App() {

//   const users = [
//     {
//       id: 1,
//       name: "Tridip",
//       age: 23,
//       role: "Software Developer"
//     },
//     {
//       id: 2,
//       name: "Kousik",
//       age: 24,
//       role: "Java Developer"
//     },
//     {
//       id: 3,
//       name: "Saikat",
//       age: 23,
//       role: "Go Developer"
//     }
//   ]

//   return (
//     <>
//       <h1> Users </h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             {user.name} | {user.age} | {user.role}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// }

// Events and State Management

//================== Event Handing =====================
// An event is an action that happens in the browser.

// Examples:
// - User clicks a button.
// - User types in an input.
// - User submits a form.
// - User moves the mouse.
// React allows us to handle these events using event handlers.

// onClick 

// function App() {
//   function handleClick() {
//     console.log("Button clicked!");
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }

// export default App;

//Don't write:
// <button onClick={handleClick()}>
// That calls the function immediately during rendering instead of waiting for a click.


// Passing arguments to event handlers
//Onclick
// function App() {
//   function handleClick(name: string) {
//     console.log("Hello", name);
//   }

//   return (
//     <button onClick={() => handleClick("Tridip")}>
//       Say Hello
//     </button>
//   );
// }

// OnChange
// function App() {
//   const handleOnchage = (event : React.ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
//   }
//   return (
//     <>
//       <input type="text" onChange={handleOnchage} />
//     </>
//   )
// }


// OnSubmit 
// const App = () => {
//   const handleSubmit = (event : FormEvent<HTMLFormElement> ) => {
//     event.preventDefault();
//     console.log("Form Submitted");

//   }
//   return (
//     <>
//       <form action="">
//         <input 
//           type="text" 
//           placeholder="Enter your username"
//         />
//         <button type="submit">
//           Submit
//         </button>
//       </form>
//     </>
//   )
// }



// onKeyDown
//  import type { KeyboardEvent } from "react";

// const App = () => {

//   const handleKeyDown = (event : KeyboardEvent<HTMLInputElement>) => {
//     if(event.key === "Enter"){
//       console.log("Enter Key Pressed");

//     }
//   }
//   return (
//     <>
//      <input type="text"
//       placeholder="Press Enter"
//       onKeyDown={handleKeyDown}
//     />
//     </>
//   )
// }



// Exercise 1
//  Create a login form.
// import type { SubmitEvent } from "react";
// const App = () => {

//   const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log("Login Form Submitted");

//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter Your Name" /><br />
//         <input type="password" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   )
// }




// Exercise 2
//  Keyboard event handling.

// Requirements:
// 1. Create a text input.
// 2. Detect the Enter key.
// 3. Detect the Escape key.
// 4. Print different messages for each key.


// import type { KeyboardEvent } from "react";

// const App = () => {
//   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
//     if (event.key === "Enter") {
//       console.log("Enter key pressed");

//     } else if (event.key === "Escape") {
//       console.log("Escape key pressed");
//     }

//   }
//   return (
//     <>
//       <input type="text"
//         placeholder="Enter Anything"
//         onKeyDown={handleKeyDown}
//       />
//     </>
//   )
// }


// ========================= useState =========================

// Example 1 
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <h1>
//           {count}
//         </h1>
//       </div>
//       <button onClick={() => setCount(c => c + 1)}>increase</button>
//       <button onClick={() => setCount(c => Math.max(0, c - 1))}>decrease</button>
//       <button onClick={() => setCount(0)}>reset</button>
//     </>
//   )
// }




// Example 2
// Build a small application with:
// 1. A text input for a username.
// 2. A state variable called username.
// 3. Display the username below the input.
// 4. Add a Clear button to empty the input.
// 5. Display Please enter your name when the input is empty.
// Use TypeScript and write it yourself.

// import { useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const [submittedName, setSubmittedName] = useState("");

//   function handleClear (){
//     setInput("");
//     setSubmittedName("");
//   }

//   return (
//     <>
//       <h1>Username Form</h1>

//       <form action="" onSubmit={(event) => {
//         event.preventDefault();
//         setSubmittedName(input)
//         }}>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           value={input}
//           onChange={(event) => setInput(event?.target.value)}
//         />
//         <button type="submit">Submit</button>
//         <button type= "button" onClick={handleClear}>Clear</button><br />

//       </form>


//       <p>Typing : {input}</p>
//       <h2>{submittedName ? `Submitted Username : ${submittedName}` : "Please submit your name"}</h2>
//     </>
//   )
// };

// export default App;
