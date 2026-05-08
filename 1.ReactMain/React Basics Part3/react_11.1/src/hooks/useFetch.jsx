import { useState, useEffect } from "react";

// custom Hook 
// export function usePostTitle(){
//   const [post, setPost] = useState({});

//   async function getPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/2")
//     const json = await response.json();
//     setPost(json);
//   }

//   useEffect(()=>{ // we can't make useEffect first function async we have to define it 
//                   // outside
//     getPost();
//     // fetch("https://jsonplaceholder.typicode.com/todos/1'")
//   },[])

//   return post.title;
// }


export function useFetch (url) { // generic function 
  const [finalData, setFinalData] = useState({});
  const [loading , setLoading ] = useState(true);
  console.log(
    url
  );
  

  async function getDetails(){
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(()=>{
    getDetails();
  },[url])

  useEffect(()=>{
    const clock = setInterval(getDetails , 10 * 1000)

    return () => {
      clearInterval(clock);
    }
  },[])

  return {
    finalData,
    loading
  }

}