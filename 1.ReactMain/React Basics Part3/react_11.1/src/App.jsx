import { useEffect, useRef, useState } from "react";
import { useFetch} from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
// import { useDebounce } from "./hooks/useDebounce";

// //custom Hook
// function useCounter() { // make the useCounter 
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount((c) => c + 1);
//   }

//   return { // returned the varialbles 
//     count: count,
//     increaseCount: increaseCount
//   }
// }

// function Counter(){
//   const {count , increaseCount} = useCounter(); // use the varialbles
//   return (
//     <div>
//       <button onClick={increaseCount}>increase count {count}</button>
//     </div>
//   );
// }


// function App() {
  
//   return (
//     <div>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//       <Counter/>
//     </div>
//   );
// }


// useFatch 
//'https://jsonplaceholder.typicode.com/todos/1'

// function App(){

//   const [currentPost, setCurrentPost] = useState(1)
//   const {finalData, loading} = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPost);

//   if(loading){
//     return(
//       <div>
//         loading....
//       </div>
//     )
//   }

//   return (
//     <div>
//         <button onClick={() => setCurrentPost(1)}>1</button>
//         <button onClick={() => setCurrentPost(2)}>2</button>
//         <button onClick={() => setCurrentPost(3)}>3</button>
//         <br />
//         {JSON.stringify(finalData)}
//     </div>
//   )
//   r
// }
// export default App;



// //---------------- usePrev----------------------

// function App(){

//   const [state , setState] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <div>
//       <p>{state}</p>
//       <button
//         onClick={() => setState(c => c +1)}
//       >CLick me</button>
//       <p>The previous value {prev}</p>
//     </div>
//   )
  
// }
// export default App;


//------------------- useDebounce
function App(){

  function sendDataToBackend(){
    fetch("api.amazon.com/search");
  }

  function useDebounce(originalFn){
    const currentClock = useRef();

    const fn =()=>{
      clearTimeout(currentClock.current);
      currentClock.current = setTimeout(originalFn,200)
    }
    return fn;
  }

  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <input type="text" onChange={debouncedFn}/>
    </div>
  )
  
}
export default App;