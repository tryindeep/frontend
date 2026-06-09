import { useState } from "react";

// function  countInitialize(){
//     console.log("run");
//     return 4;

// }

// function App() {
//   // START
//   // you can use inside a function only
//   // you can conditionally render hooks;
//   // hooks works in oder-wise only (one after another)

//   // --------there is two way to declare the useState--------

//   //1.
//     const [count, setCount] = useState(0);

//   //2.

//   //   const [count, setCount] = useState(() => {
//   //   console.log('run function');
//   //   return 4;

//   // });

//   // --------deeper explanation--------
//   // go out of App component to check the function
//     // const [count, setCount] = useState( countInitialize());
//     // const [count, setCount] = useState(() =>  countInitialize());

//   return (
//    <>
//     <button onClick={() => {setCount(count => count - 1)}}>-</button>
//     <span>{count}</span>
//     <button onClick={() => {setCount(count => count + 1)}}>+</button>
//    </>
//   )
// }

// export default App


//----------------- useState while using Object------------------
function App() {

  const [state , setState] = useState({count : 4 , theme : "black"});
  const count = state.count;
  const theme = state.theme;

  /// Important :
  function decrementCount(){
  //   setState( prevState => {
  //     return {count: prevState.count -1} // it will overrieding all over all state so we do this down
  //   })
  }
  function incrementCount(){
     setState( prevState => {
      return {...prevState , count: prevState.count +1}
    })
  }
  
  return (
    <>
      return (
      <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
      </>
      )
    </>
  );
}

export default App;
