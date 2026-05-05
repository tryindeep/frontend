const { useState } = require("react");

export default function App() {

  const [todos , setTodos] = useState([{
    title : "go to gym ",
    description : "Hit the gym",
    done : false
  }]);

  function addTodo () {
  
     setTodos([...todos,{
        title : 
     }])
  }

  return {
    <button onClick={addTodo}></button>
  };
}


