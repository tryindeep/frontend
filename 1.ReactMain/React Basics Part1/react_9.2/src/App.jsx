import { useState, useEffect } from "react";

// function App() {
//   const [isTrue, setIsTrue] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTrue((prev) => !prev);
//     }, 5000);
//     // cleanup
//   }, []);

//   return (
//     <>
//       <b>hi there</b>
//       {isTrue ? <Counter></Counter> : null}
//     </>
//   );
// }

// // mounts
// function Counter(props) {
//   const [count, setCount] = useState(0);

//   // hooking into the lifecycle events of react
//   // mounting , re-rendering , unmounting
//   // console.log("counter");

//   // useEffect ( funciton , [dependency array])

//   useEffect(function () {
//     console.log("on mount");

//     const clock = setInterval(function () {
//       // we have to clearn the interval
//       console.log("inside setInterval");
//       setCount((count) => count + 1);
//     }, 1000);
//       // clear interval
//     return function () {
//       console.log("on unmount");
//       clearInterval(clock);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button>Increase Count </button>
//     </div>
//   );

// }

// re-learning cleanup , useeffect , dependency array
// useEffect
function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }
  function DecreaseCount() {
    setCount2((c) => c - 1);
  }

  return (
    <div>
      <Counter count={count} count2={count2} />
      <button onClick={increaseCount}> increase Count </button>
      <button onClick={DecreaseCount}> Decrease Count</button>
    </div>
  );
}

//mouting , re-rendering , unmounted
function Counter(props) {
  useEffect(function () {
    console.log("mount");

    return function () {
      console.log("un mount");
    };
  }, []); // dependency array


  // using dependency array
  useEffect(
    function () {
      console.log("Count has changed");

      return function () {
        console.log("cleanup inside second effect ");
      };
    },
    [props.count],
  );

  return (
    <div>
      Counter {props.count}
      <br />
      Counter2 {props.count2}
    </div>
  );
}

export default App;
