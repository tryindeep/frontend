import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Button } from "./components/Button";

import { Otp } from "./components/Otp";

function App() {
  return (
    <div className="h-screen bg-blue-700">
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <Input type="text" placeholder={"Username"}></Input>

      <Button disabled={false}>Sign Up</Button> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <Otp></Otp>
    </div>
  );
}

export default App;
