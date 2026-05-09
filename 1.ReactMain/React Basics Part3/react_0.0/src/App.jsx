
import { useContext, useState , createContext } from "react";
// import { useState, createContext  } from "react";

// Props drilling killer 2 ways 
// 1. context API

// Ideally we have to store in a separate file

// Context 3 parts
// 1. Create the context :  createContext();
// 2. Wrap the it with Provider : contextName.Provider 
// 3. catch and use it through using useContext = useContext();

const BulbContext = createContext(); // created the context


// How to create a Provider 
// cleaner way to do it 
// using wapper component
function BulbProvider({children}){ // this children = <Light />  // component
  const [bulbOn , setBulbOn] = useState(true);


  return <BulbContext.Provider value={{  //provided the context through key valur pair
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
        }}>

        {children} 

      </BulbContext.Provider>

  
}

function App() {
 
  return (
   <div>
    <BulbProvider>
      <Light/>
    </BulbProvider>
   </div>
  )
}


function Light() {
  
  return (
    <div >
      <LightBulb  />
      <LightSwitch />
    </div>
  )
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext); // catch the context here
  return (
    <div>
      {
        bulbOn ? <img src="./src/assets/lighton.png" alt="" />
        : <img src="./src/assets/lightoff.png" alt=""/>
      }
    </div>
  )
}

function LightSwitch(){
  const {bulbOn , setBulbOn} = useContext(BulbContext); // catch the context here also   
  return (
    <div>
      <button onClick={() => setBulbOn(prev => !prev)}>Toggle The Bulb</button>
    </div>
  )
}




// /// WHY STATEMANAGMENT LIBRARY ARE IMPORT BETTER THAN CONTEXT API 

// import React, { createContext, useContext, useState } from 'react';

// const CountContext = createContext();

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0);

//   return <CountContext.Provider value={{count, setCount}}>
//     {children}
//   </CountContext.Provider>
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Incrase />
//       <Decrease />
//       <Value />
//     </CountContextProvider>
//   );
// }

// function Decrease() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(c => c-1)}>Decrease</button>;
// }

// function Incrase() {
//   const {setCount} = useContext(CountContext);
//   return <button onClick={() => setCount(c => c+1)}>Increase</button>;
// }

// function Value() {
//   const {count} = useContext(CountContext);
//   return <p>Count: {count}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// import React, { createContext, useContext, useState } from 'react';
// import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

// const count = atom({
//   key: 'countState', // unique ID (with respect to other atoms/selectors)
//   default: 0, // default value (aka initial value)
// });

// function Parent() {
//   return (
//     <RecoilRoot>
//       <Increase />
//       <Decrease />
//       <Value />
//     </RecoilRoot>
//   );
// }

// function Decrease() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
// }

// function Increase() {
//   const setCount = useSetRecoilState(count);
//   return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
// }

// function Value() {
//   const countValue = useRecoilValue(count);
//   return <p>Count: {countValue}</p>;
// }

// // App Component
// const App = () => {
//   return <div>
//     <Parent />
//   </div>
// };

// export default App;

