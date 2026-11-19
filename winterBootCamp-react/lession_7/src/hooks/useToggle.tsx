import React, { useState } from "react";

export default function useToggle(initialValue: boolean = false) {
  const [toggle, setToggle] = useState(initialValue);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }
  return {
    toggle,
    handleToggle,
  };
}
