import { useEffect, useState } from "react";
import { PostComponent } from "./Post";
import { Todo } from "./Todo";

// function App() {
//   const [posts , setPosts] = useState([]);

//   const postComponents = posts.map(post => <PostComponent
//             name={post.name}
//             subtitle={post.subtitle}
//             description={post.description}
//             time={post.time}
//             image={post.image}
//             />)
//   function addPost(){
//      setPosts([...posts,{
//         name: "Shreeja",
//         subtitle: "10,000 followers",
//         description: "Make Glifindor Mufler in 10 minutes | How to make mulfler ",
//         time: "2m ago",
//         image:"./src/assets/profileImage.jpg"
//       }])
//   }

//   return (

//     <div style={{background: "#f7f1e3", height: "100vh"}}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{display : "flex" ,  justifyContent: "center"}}>
//         <div>
//           <div>
//             {postComponents}
//           </div><br />
//         </div>
//       </div>

//     </div>
//   )
// }

// import { useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(1);
//   const [count2, setCount2] = useState(1);

//   function increaseCount() {
//     setCount((count) => count + 1);
//   }
//   function decreaseCount() {
//     setCount2((count2) => count2 - 1);
//   }

//   useEffect(() => {
//     setInterval(increaseCount, 5000);
//     setInterval(decreaseCount, 8000);
//   }, []); // this effect only run on monunt, because the array is empty

//   useEffect(() => {
//     console.log("The count has been updated to " + count);
//   }, [count,count2]); // count changes it will run the effect

//   return (
//     <div>
//       {/* <div style={{ display: "flex" }}>
//         <div
//           style={{
//             background: "red",
//             borderRadius: 20,
//             width: 20,
//             height: 25,
//             paddingTop: 6,
//             paddingLeft: 8,
//           }}
//         >
//           {count} {count2}
//         </div>
//       </div>
//       <img
//         style={{ cursor: "pointer" }}
//         src={"./src/assets/bellicon.png"}
//         width={70}
//       />
//       <br /> */}
//       {count} {count2}
//     </div>
//   );
// }

// function App() {

//   const [currentTab, setCurrentTab] = useState("todo1")

//   useEffect(()=> {
//     // backend request to get data for this tab
//     console.log("send  request to  backend to get data for  tab " + currentTab);

//   },[currentTab])

//   return (
//     <div>
//       <button onClick={() => setCurrentTab("todo1")} style={{color: currentTab == "todo1" ?
//         "red" : "black"
//       }}>Feed</button>

//       <button onClick={() => setCurrentTab("todo2")} style={{color: currentTab == "todo2" ?
//         "red" : "black"
//       }}>Nontifications</button>

//       <button onClick={() => setCurrentTab("todo3")} style={{color: currentTab == "todo3" ?
//         "red" : "black"
//       }}>todo3</button>

//       <button onClick={() => setCurrentTab("todo4")} style={{color: currentTab == "todo4" ?
//         "red" : "black"
//       }}>todo4</button>
//     </div>
//   )
// }

// function App() {

//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(()=> {
//     // backend request to get data for this tab
//     // console.log("send  request to  backend to get data for  tab " + currentTab);

//     // backend request using useEffect
//     setLoading(true); // loading the data
//     fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
//     .then(async res => {
//       const json = await res.json();
//       setTabData(json)
//       setLoading(false);
//     })

//   },[currentTab]) //------------------dependency array----------------

//   return (
//     <div>
//       <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ?
//         "red" : "black"
//       }}>Todo #1</button>

//       <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ?
//         "red" : "black"
//       }}>Todo #2</button>

//       <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ?
//         "red" : "black"
//       }}>Todo #3</button>

//       <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ?
//         "red" : "black"
//       }}>Todo #4</button>
//       <br />
//       {loading ? "Loading...." : tabData.title}
//     </div>
//   )
// }

//------------------Clean Up-----------------

// function App () {
//   const [showTimer , setShowTimer] = useState(true);

//   useEffect(() => {
//     setInterval(()=>{
//       setShowTimer(prev => !prev)
//     }  , 5000)
//   },[])

//   return (
//     <div>
//       {showTimer && <Timer/>}
//     </div>
//   )
// }

// const Timer = () => {
//   const [seconds, setSecond] = useState(0);

//   useEffect(()=>{
//     let clock = setInterval(() => {
//       console.log("from inside clock");
//       setSecond(prev => prev + 1)
//     }, 1000);
//     // clean Up
//     return () => {
//       clearInterval(clock)
//     }
//   },[])

//   return <div>{seconds} seconds elapsed</div>
// }

//..................children / used for wrapper component....................
// function App() {
//   // we can pass react element as a prop
//   return (
//     <div style={{display: "flex", background: "gray"}}>
//       <Card>
//         <div style={{color: "green"}}>
//           what do you want to post <br />
//           <input type={"text"} />
//         </div>
//       </Card>
//       <Card >
//         <div>
//               hi there
//         </div>

//       </Card>
//     </div>
//   )
// }

// function Card({children}){ // GENERIC CARD COMPONENT
//   return (
//     <div style={{background: "black", borderRadius: 10, color: "white",
//       padding: 10, margin: 10
//     }}>
//       upper Top navbar
//       {children}
//       lower Bottom footer
//       {children}
//     </div>
//   )
// }

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

//--- ----------- LIST AND KEYS------------------------

// const App = () => {
//   // const [todos , setTodos] = useState([{
//   //   title: "Go to gym",
//   //   done: false
//   // },{
//   //    title: "eat food",
//   //   done: true
//   // }])

//   // function addTodos(){
//   //   setTodos([...todos,{
//   //     title: "drink water",
//   //     done: true
//   //   }])
//   // }

//   // const todoComponents = todos.map(todo => <Todo
//   //   title={todo.title}
//   //   done={todo.done}
//   // />)

//   // when you are using react and using list you specify
//   // the key for unique identfies that spacific todo
//   return (
//     <div>
//       {[
//         <Todo key={1} title={"Go to gym"} done={false}/>,
//         <Todo key={2} title={"Eat food"} done={true}/>
//       ]}
//     </div>
//   )
// }

//====class based component and functional based component=======

//class based component
import React, { Component } from "react";

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div style={{
//               border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//             }}>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// //function component

// const FunctionalCounter = () => {
//     const [count, setCount] = useState(0);

//     function increment() {
// 	    setCount(count => count + 1)
//     }

//     return (
//         <div style={{
//               border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//             }}>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// };

// function App() {
//   return(
//     <div >
//       class based component
//       <ClassCounter/>
//       <br />
//       function component
//       <FunctionalCounter/>

//     </div>
//   )
// }

//-----------life cycle events---------------

// class based

// class classBasedMyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   componentDidMount() {
//     console.log('Component mounted');
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('Component updated');
//   }

//   componentWillUnmount() {
//     console.log('Component will unmount');
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Increment
//         </button>
//       </div>
//     );
//   }
// }

// fucntional component

// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('Component mounted or count updated');

//   }, [count]); // Runs on mount and when count changes

// 	useEffect(() => {
// 		    console.log('Component mounted');
//     return () => {
//       console.log('Component will unmount');
//     };
// 	}, [])

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// function App() {

//   return (
//     <div>
//       <MyComponent/>
//     </div>
//   )
// }

//----------------Error Boundary-----------------------

// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <Card1 />
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Card2 />
//       </ErrorBoundary>
//     </div>
//   );
// }


// blackbox
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
          something went wrong
        </div>
      );
    }

    return this.props.children;
  }
}

function Card1() {
  throw new Error("Error while rendering ");
  return (
    <div style={{ background: "red", borderRadius: 20, padding: 20 }}>
      hi there
    </div>
  );
}

function Card2() {
  return (
    <div
      style={{ background: "red", borderRadius: 20, padding: 20, margin: 20 }}
    >
      hello
    </div>
  );
}


///---------------- fragments--------------------------
// import { Fragment } from "react";
function App() {
  return (
    <>
      <div>hi there</div>
      <div>hello</div>
    </>
  );
}

export default App;
