import React, { useState } from "react";

const Counter = function Counter() {
  const [count, setCount] = useState(0);

  const hendleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={hendleClick}>Increment</button>
    </>
  );
}

export default Counter;