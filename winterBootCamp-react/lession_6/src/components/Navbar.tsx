import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

export default function Navbar() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("Navbar must be inside UserContext.Provider");
  }

  const { user, setUser } = context;

  function handelChange() {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Rahul",
    }));
  }
  function handleRevert() {
    setUser((prevUser) => ({
      ...prevUser,
      name: "Tridip",
    }));
  }

  return (
    <div>
      <h2>NavBar</h2>
      <p> Welcome : {user.name}</p>
      <button onClick={handelChange}> Change </button>
      <button onClick={handleRevert}> Revert </button>
    </div>
  );
}
