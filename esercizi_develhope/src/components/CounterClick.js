import React, { useState } from "react";

const CounterClick = function Counter() {
  const [count, setCount] = useState(0);

  const hendleClick = () => {
    setCount(count + 1);
    console.log(count)
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={hendleClick}>Increment</button>
    </>
  );
}

export default CounterClick;