// import { useState } from "react";


// export function App() {

//   const [input , setInput] = useState('')
//   const [name , setName] = useState(localStorage.getItem("user") ?? "")

//   function handleClear(){
//     localStorage.removeItem("user");
//     setName('');
//     setInput('')
//   }

//   function handleSet(name : string){
//     localStorage.setItem("user", name);
//     setName(name);
//   }

//   return (
//     <div >
//       <h1>Username Persistence App</h1>
//       <p>Enter Your Username </p>
//       <input 
//         type="text" 
//         name="" 
//         id="" 
//         value={input} 
//         onChange={(e) => setInput(e.target.value)}
      
//       />
//       <button onClick={() =>  handleSet(input)}>Set</button>
//       <button onClick={handleClear}>clear</button>

//       <h2>Current Username</h2>
//       {name}
//     </div>
//   );
// }

// export default App;



// Use custom hooks 

import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

export function App() {

  const [input, setInput] = useState("");

  const [name, setName, removeName] = useLocalStorage(
    "username",
    ""
  );

  function handleSet() {
    setName(input);
    setInput("");
  }

  function handleClear() {
    removeName();
    setInput("");
  }

  return (
    <div>
      <h1>Username Persistence App</h1>

      <p>Enter Your Username</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleSet}>Set</button>

      <button onClick={handleClear}>Clear</button>

      <h2>Current Username: {name}</h2>
    </div>
  );
}

export default App;
