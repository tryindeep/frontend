// // useReducer
// What is useReducer?
// useReducer is a React Hook that manages state using a reducer function and dispatched actions.

// Its syntax:
// const [state, dispatch] = useReducer(reducer, initialState);

// Understand these three things:
// Part	Meaning

// state : 	Current state
// dispatch : 	Sends an action to the reducer
// reducer :  	Determines the next state
// initialState :  	Initial value of state

// make counter using useReducer instead of useState
// import { useReducer } from "react";

// type Action = {
//   type :  "increment" | "decrement" | "reset" ;
// }
// type State = {
//   count  : number
// }

// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement",
//   RESET : "reset"
// } as const ;

// function reducer(state : State, action : Action) : State {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return {count : state.count + 1};
//     case ACTIONS.DECREMENT:
//       return {count : Math.max(0, state.count - 1)};
//     case ACTIONS.RESET:
//       return {count : 0};
//     default:
//       return state;
//   }
// }

// export function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });

//   return (
//     <>
//       <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
//       <span>{state.count}</span>
//       <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
//       <br />
//       <button onClick={() => dispatch({ type: ACTIONS.RESET })}>reset</button>
//     </>
//   );
// }

// export default App;

// Next exercise — Task Manager using useReducer
// Now let's apply useReducer to something more realistic.

// Your task is to convert your earlier Task Manager from useState to useReducer.

// Requirements:
// 1. Add a task.
// 2. Delete a task.
// 3. Toggle completed/pending.
// 4. Clear all completed tasks.
// 5. Display total, completed and pending counts.
// Use:
// - TypeScript types.
// - useReducer.
// - switch statements.
// - Action payloads.
// - Immutable updates using .map() and .filter().
// This is where you'll understand why useReducer is useful for complex applications.

import { useReducer, useState } from "react";
import Task from "./components/Task";

export const ACTIONS = {
  ADD_TASK: "add-task",
  DELETE_TASK: "delete-task",
  TOGGLE_TASK: "toggle-task",
  REMOVE_COMPLETED_TASK: "remove-completed-task",
} as const;

type Action =
  | { type: typeof ACTIONS.ADD_TASK; payload: { title: string } }
  | { type: typeof ACTIONS.DELETE_TASK; payload: { id: number } }
  | { type: typeof ACTIONS.TOGGLE_TASK; payload: { id: number } }
  | { type: typeof ACTIONS.REMOVE_COMPLETED_TASK };
  
type tasks = {
  id: number;
  title: string;
  completed: boolean;
};
function reducer(tasks: tasks[], action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...tasks, newTodo(action.payload.title)];
    case ACTIONS.TOGGLE_TASK:
      return tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case ACTIONS.DELETE_TASK:
      return tasks.filter((task) => task.id !== action.payload.id);
    case ACTIONS.REMOVE_COMPLETED_TASK:
      return tasks.filter((task) => !task.completed);
    default:
      return tasks;
  }
}

function newTodo(title: string) {
  return { id: Date.now(), title: title, completed: false };
}
export function App() {
  const [tasks, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TASK, payload: { title } });
    setTitle("");
  }

  return (
    <>
      <h1>Task Application </h1>
      <p>Total task : {tasks.length}</p>
      <p>
        {" "}
        Completed Task :{" "}
        {tasks.filter((task) => task.completed !== false).length}
      </p>
      <p>
        {" "}
        Pending Task : {tasks.filter((task) => task.completed !== true).length}
      </p>

      <h3></h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Enter the task"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> ADD</button>
      </form>
      <h2>Task</h2>
      <button
        type="button"
        onClick={() => dispatch({ type: ACTIONS.REMOVE_COMPLETED_TASK })}
      >
        Clear Completed Tasks
      </button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} dispatch={dispatch} />
      ))}
    </>
  );
}

export default App;

// // normal version useState now we are going to change useReducer hook

// import { useReducer, useState } from "react";

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement',
// }

// interface Action {
//   type : string
// }
// interface State {
//   count : number
// }
// function reducer(state : State, action : Action) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return { count: state.count + 1 }
//     case ACTIONS.DECREMENT:
//       return { count: state.count - 1 }
//     default:
//       return state;
//   }

// }

// export function App() {
//   // const [count , setCount] = useState(0);
//   const [state, dispatch] = useReducer(reducer, { count: 0 })  // (function , initial value)
//   // reducer which is a function that perform on our state to get new state and
//   // initial value of a state
//   const increment = () => {
//     dispatch({ type: ACTIONS.INCREMENT });
//   }
//   const decrement = () => {
//     dispatch({ type: ACTIONS.DECREMENT });
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>{state.count}</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// export default App;

// Making a difficult version of TODOs

// import { useReducer, useState } from "react";
// import Todo from "./components/Todo";

// type Todo = {
//   id : number,
//   name : string,
//   completed : boolean
// }

// export const ACTIONS = {
//   ADD_TODO : 'add-todo',
//   TOGGLE_TODO : 'toggle-todo',
//   DELETE_TODO : 'delete-todo'
// }

// function reducer(todos : Todo [] , action : any ) {
//   switch(action.type){
//     case ACTIONS.ADD_TODO :
//       return [...todos , newTodo(action.payload.name)];
//     case ACTIONS.TOGGLE_TODO :
//       return todos.map((todo) => {
//         if (todo.id === action.payload.id){
//           return {...todo, completed : !todo.completed}
//         }
//         return todo
//       })
//     case ACTIONS.DELETE_TODO :
//       return todos.filter((todo) => todo.id !== action.payload.id)
//   }

// }

// function newTodo (name : string){
//   return {id : Date.now() , name : name , completed : false}
// }

// export function App() {
//   const [todos, dispatch] = useReducer(reducer, [])
//   const [name, setName] = useState('');

//   function handleSubmit(e : any){
//     e.preventDefault();
//     dispatch({type : ACTIONS.ADD_TODO , payload : {name}});
//     setName('');
//   }

//   return (
//     <>
//     <form action="" onSubmit={handleSubmit}>
//       <input type="text" value={name} onChange={e => setName(e.target.value)}/>

//     </form>

//       {todos.map((todo) =>  (
//         <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
//       ))}
//     </>
//   );
// }

// export default App;
