import { useState, useEffect } from "react"

export default function App() {
  const [resourceType , setResourceType] = useState('posts');
  // const [items , setItems] = useState([]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setItems(json))
  // },[resourceType])


useEffect(()=>{
  console.log("resource changed");
  
  return () => {
    console.log('return from resource changed');
    
  }
},[resourceType])

  return (
    <>
     <div>
        <button onClick={() => setResourceType('posts')}> Posts </button>
        <button onClick={() => setResourceType('users')}> Users </button>
        <button onClick={() => setResourceType('comments')}> comments </button>
     </div>
     <h1>{resourceType}</h1>
     {/* {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
     })} */}

    </>
  )
}


// ---------- Difficulty level 2 -----------------

// import { useState, useEffect } from "react"

// export default function App() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth)
//   }
//   useEffect(() => { 
//     window.addEventListener('resize' , handleResize)

//     return () => {
//       window.removeEventListener('resize',handleResize)
//     }
//   },[])

//   return (
//     <>
//       <div>{windowWidth}</div>
//     </>
//   )
// }
