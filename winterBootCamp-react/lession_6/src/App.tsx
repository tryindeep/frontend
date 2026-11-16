import { useState } from "react";
import { UserContext } from "./context/UserContext";
import type { User } from "./context/UserContext";

import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";


export function App() {

  const [user , setUser ] = useState<User>({
    id : 1,
    name : "Tridip",
    role : "Software Engineer"
  });

  return (
    <div style={{border : "2px solid black" }}>
      <h1>My Application</h1>

      <UserContext.Provider value={{user , setUser}}>
        <Navbar/>
        <UserProfile/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
