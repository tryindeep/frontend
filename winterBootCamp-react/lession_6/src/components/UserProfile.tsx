import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function UserProfile() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Navbar must be inside UserContext.Provider");
  }
  const { user } = context;
  return (
    <div style={{border : "1px solid black" , margin : " 2px" }}>
      <h2>User Profile </h2>
      <p>{user.name}</p>
      <p>{user.role}</p>
      <p>{user.id}</p>
    </div>
  );
}
