import React, { useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}
