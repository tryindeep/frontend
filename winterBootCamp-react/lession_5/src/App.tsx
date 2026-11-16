// Context API
// 1. First understand Prop Drilling
// Imagine you're building an application with this component structure:
// App

// Has user information

// Dashboard

// Receives user as a prop

// Navbar

// Passes user again

// UserProfile

// Actually needs the user data

// Suppose only UserProfile needs the user information.

// But Dashboard and Navbar must receive and forward that information.

// This is called Prop Drilling.

// example
// function App() {
//   const user = "Tridip";

//   return <Dashboard user={user} />;
// }

// function Dashboard({ user }) {
//   return <Navbar user={user} />;
// }

// function Navbar({ user }) {
//   return <UserProfile user={user} />;
// }

// function UserProfile({ user }) {
//   return <h1>Hello, {user}</h1>;
// }

// 2. What is Context API?
// React Context lets a parent component make information available to components deeper in its tree without manually passing props through every intermediate component.

// Think of it as a shared data source for a particular component subtree.

// Three important APIs:
// API	Purpose
// createContext()	Creates a context
// Provider	Makes a value available to descendants
// useContext()	Reads the nearest provider's value

// Exercise 1 — User Context Application
// Beginner
//  TypeScript

// Now it's your turn.

// Build an application that shares user information using Context API.

import React, { createContext, useContext, useState } from "react";

type User = {
  id: number;
  name: string;
  role: string;
};

type UserContextType = {
  user : User | null;
}
const UserContext = createContext<UserContextType | null>(null);


const Navbar = () => {
  const context = useContext(UserContext)
  return (
    <>
    <div>
      <p>Welcome : {context?.user?.name}</p>
    </div>

    </>
  )
};

const UserProfile = () => {
  const context = useContext(UserContext)
  return (
    <>
      <div style={{border : "1px solid black", margin : "2px"}}>
        <h2>User Profile </h2>
        <h3>{context?.user?.name}</h3>
        <p>{context?.user?.role}</p>
        <p>{context?.user?.id}</p>
      </div>
    
    </>
  )
};

export function App() {
  const user ={
    id : 1,
    name : "Tridip",
    role : "Software Engineer"
  };


  return (
    <>
      <div style={{border : "2px solid black", }}>
        <h1>My Application</h1>
        <UserContext.Provider value={{user}}>
          <Navbar/>
          <UserProfile/>
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;











