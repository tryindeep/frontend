import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// Routing
// Link
function App() {

  // another way of routing 
//   const router = [{
//     path: "/neet/online-coaching-class-11",
//     element : <Class11Program/>
//   },{
//     path: "/neet/online-coaching-class-12",
//     element : <Class12Program/>
//   }
// ]


  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path="/neet" element={<Layout/>}>
                <Route path="/neet/online-coaching-class-11" element={<Class11Program/>} />
                <Route path="/neet/online-coaching-class-12" element={<Class12Program/>} />
                <Route path="/" element={<LandingPage/>} />
                <Route path="*" element={<ErrorPage/>} />
              </Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

// layouts
function Layout() {
  return (
    <div style={{height: "100vh" , background: "green"}}>
        <Header/>
        <div style={{height: "90vh", background: "red"}}>
          <Outlet/>
        </div>
        Footer | Contact Us
    </div>
  )
}
function Header() {
  return (
    <div>
       <Link to="/">Allen</Link> 
        |
        <Link to="/neet/online-coaching-class-11">Class 11</Link> 
        |
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
    </div>
  )
}

function ErrorPage(){
  return (
    <div>
      Sorry Page not found
    </div>
  )
}
function LandingPage(){
  return (
    <div>
      Welcome to allen!
    </div>
  )
}

function Class11Program(){
  return (
    <div>
      NEET courses for Class 11th
    </div>
  )
}

// useNavigate
function Class12Program(){
  const navigate = useNavigate();

  function redirectUser(){
    navigate("/")
  }
  return (
    <div>
      NEET courses for Class 12th
      <button onClick={redirectUser}>Go back to landing page</button>

        {/* <Link to="/"><button>Go back to landing page</button></Link> */}
    </div>
  )
}


// useRef 
// reference to a value, such that when you change the value, the component DOES not 
// RE-RENDER
// import { useRef } from "react";

// function App() {
//   const inputRef = useRef();


//   function focusOnInput(){
//     inputRef.current.focus();
//   }

//   return(
//     <div>
//       Sign Up : 
//       <input ref={inputRef} type={"text"}></input>
//       <input type={"text"}></input>
//       <button onClick={focusOnInput}>Submit</button>
//     </div>
//   )
// }




// import { useState, useEffect, useRef } from "react";
// // A clock with a start and stop button
// function App(){
//     const [currentCount, setCurrentCount] = useState(0);
//     // const [timer, setTimer] = useState(0);
//     const timer = useRef();

  
//     function startClock(){
//       let value = setInterval( ()=>{
//         setCurrentCount(c => c + 1)
//       }, 1000);
//       // setTimer(value)
//       timer.current = value;
//     }
//     function stopClock(){
//       // console.log(timer);
//        clearInterval(timer.current)
//     }

//     return(
//       <div>
//         {currentCount}
//         <br />
//         <button onClick={startClock}>Start</button>
//         <button onClick={stopClock}>Stop</button>
//       </div>
//     )
// }


// import React, { useEffect, useRef, useState } from 'react';


// function App(){
//   return (
//     <div>
//       <Chat/>
//     </div>
//   )
// }
// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default Chat;


// import { useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);

//     // cleanup function
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div>
//       <h1>Timer: {count}</h1>
//     </div>
//   );
// }

export default App;


