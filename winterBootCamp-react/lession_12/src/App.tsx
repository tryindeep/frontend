// //  useMemo

import { useState } from "react";

// import { useMemo, useState } from "react";

// export function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {
//       let count = 0;
//       for (let i = 1; i <= inputValue; i++) {
//         count = count + i;
//       }
//     }, [inputValue]);

//   return (
//     <div>
//       <input
//         onChange={function (e) {
//           setInputValue(Number(e.target.value));
//         }}
//         placeholder={"Find sum from 1 to n"}
//       />
//       <br />
//       Sum from 1 to {inputValue} is {count}
//       <br />
//       <button
//         onClick={() => {
//           setCounter(counter + 1);
//         }}
//       >
//         Counter ({counter})
//       </button>
//     </div>
//   );
// }

// export default App;


//  useMemo


export function App() {
  const [ number , setNumber] = useState(0);
  const [ dark , setDark ] = useState(false);

  const doubleNumber = slowFunction (number);

  function slowFunction(num  : number){
    console.log('Calling slow function');
    for (let i = 0; i <  10000000000; i++) {}
    return num * 2;
  }

  const themeStyles = {
    backgroundColor : dark ? 'black' : 'white',
    color : dark ? 'white' : 'black'
  }



  return (
   <>
      hi 
      <input type="text" />
   </>
  );
}

export default App;