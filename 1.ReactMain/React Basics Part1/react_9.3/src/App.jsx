import { useEffect, useState } from "react";
import { PostComponent } from "./Post";

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

function App () {
  const [showTimer , setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(()=>{
      setShowTimer(prev => !prev)
    }  , 5000)
  },[])

  return (
    <div>
      {showTimer && <Timer/>}
    </div>
  )
}

const Timer = () => {
  const [seconds, setSecond] = useState(0);

  useEffect(()=>{
    let clock = setInterval(() => {
      console.log("from inside clock");
      setSecond(prev => prev + 1)
    }, 1000);
    // clean Up 
    return () => {
      clearInterval(clock)
    }
  },[])



  return <div>{seconds} seconds elapsed</div>
}
export default App;
