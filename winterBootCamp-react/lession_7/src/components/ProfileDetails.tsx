import useToggle from "@/hooks/useToggle";
import React from "react";

export default function ProfileDetails() {
  const { toggle, handleToggle } = useToggle();

  const user = {
    id : 1,
    name : "Tridip",
    role : "Software Engineer"
  }

  return (
    <div>
        
        <button onClick={handleToggle}>
            {toggle ? "Show details " : "Hide Details"}
        </button>

        {toggle ? null : 
        <div>
            <p>Name : {user.name}</p>
            <p>Role : {user.role}</p>
            <p>Id : {user.id}</p>
        </div>}
        
    </div>
  )
}
