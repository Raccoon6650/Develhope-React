import React, { useEffect, useState } from "react";
import CounterDisplay from "./counter";

const CounterT = function Counter(props) {
  const [count, setCount] = useState(props.base);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, props.time);

    return () => clearInterval(timer);
  }, [props.time]);

  return (
    <>
      <CounterDisplay count = {count}/>
    </>
  );
};

CounterT.defaultProps = {
    base: 0,
    time: 1000

}

export default CounterT;