import { useRef, useState } from "react";


export function App() {

  const [count , setCount ] = useState(0);
  // const timer = useRef();

  function handleStart(){
    let value = setInterval(() => {
      setCount(c => c + 1)
    },1000)
    // timer.current = value;
    
  }
  function handleStop(){

    // clearInterval(timer.current)

  }

  return (
    <>
      {count}
      <br />
      <button onClick={handleStart}>START</button>
      <button onClick={handleStop}> STOP</button>
      
    </>
  )
}

export default App;
