//Important React rule: Component names must start with a capital letter.

import { useState } from "react";





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





// Next lesson — useState with Arrays
// Build a Todo List using React and TypeScript.

// Requirements:
// 1. Create an input field.
// 2. Add a button to add a todo.
// 3. Store todos using useState.
// 4. Display todos using .map().
// 5. Give every todo a unique ID.
// 6. Add a Delete button for each todo.
// 7. Clear the input after adding a todo.
// 8. Don't allow empty todos.
// Hints:
// - Use an array of objects rather than an array of strings.
// - Each object should contain id and title.
// - Use the spread operator to add items.
// - Use .filter() to delete an item.

// type Todo = {
//   id: number,
//   title: string,
// }

// const App = () => {

//   const [input, setInput] = useState("");
//   const [todos, setTodos] = useState<Todo[]>([
//     {
//       id: 1,
//       title: "Go to gym"
//     }
//   ]);

//   // adding todo 
//   function handleAdd() {

//     const trimedTitle = input.trim();

//     if(!trimedTitle){
//       return;
//     }

//     const newTodo : Todo = {
//       id : Date.now(),
//       title : trimedTitle
//     }

//     setTodos((prevTodos)=>[...prevTodos, newTodo])
//     setInput("");
//   }

//   // deleting todo
//   const handleDelete = (id : number) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
//   }

//   return (
//     <>
//       <h1>Todo Application </h1>
//       <input type="text"
//         placeholder="Enter Your Todo "
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={handleAdd}>Add</button>

//       <h2>Todos ({todos.length})</h2>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.title}
//             <button type="button"
//               onClick={() => handleDelete(todo.id)}
//             >
//               delete
//             </button>
//           </li>

//         ))}

//       </ul>
//     </>
//   )
// }


// Build a Task Manager using React and TypeScript.
// My Task Manager
// Total Tasks
// 4

// Completed
// 2

// Pending
// 2


// Enter a new task...

// Add


// Learn React Hooks
// Completed

// Practise TypeScript
// Completed

// Build a backend API
// Pending

// Solve 3 DSA problems
// Pending

// Illustrative expected application layout.
// Requirements
// 1. Create a Task type

// Each task should contain:
// - id: number
// - title: string
// - completed: boolean
// 2. Add tasks
// - Create an input field.
// - Add an Add button.
// - Prevent empty tasks.
// - Clear the input after adding.
// 3. Display tasks
// - Use .map().
// - Display the task title.
// - Use a unique key.
// 4. Delete tasks
// - Add a Delete button for every task.
// - Remove the selected task using .filter().
// 5. Complete / Undo tasks
// - Add a button to mark a task completed.
// - Clicking it again should mark it pending.
// - Use .map() to update the selected task.
// 6. Task statistics
// - Display total tasks.
// - Display completed tasks.
// - Display pending tasks.



type Task = {
  id: number,
  title: string,
  completed: boolean
}

function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAdd() {
    const trimmedTitle = input.trim();

    if (!trimmedTitle) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false
    }

    setTasks((prevTasks) => [...prevTasks, newTask])
    setInput("");
  }

  function handleDelete(id: number) {
    setTasks((prevtasks) => prevtasks.filter((task) => task.id !== id))
  }

  function handleToggle (id : Number){
    setTasks((prevtasks) => 
      prevtasks.map((task) => 
        task.id === id ? {...task, completed : !task.completed} : task
      )
    )
  }

  return (
    <>
      <h1>Task Manager Application </h1>


      <div style={{ display: "flex", gap: "16px", margin: "4px", padding: "4px" }}>
        <p>Total Task : {tasks.length}</p>
        <p>Completed : {tasks.filter((task) => task.completed !== false).length}</p>
        <p>Pending : {tasks.filter((task) => task.completed !== true).length}</p>
      </div>

      <div className="input">
        <input
          type="text"
          placeholder="Enter your task "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <br />
      <div >
        <h2>All Tasks </h2>
        {tasks.map((task) => (

          <li key={task.id}>
            <input
              type="Checkbox"
              checked ={task.completed}
              onClick={() => handleToggle(task.id)}
            />
            {task.title}
            <button onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </div>

    </>
  )
}


export default App;
