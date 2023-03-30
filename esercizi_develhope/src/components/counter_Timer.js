import React, { useEffect, useState } from "react";

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
      <h1>{count}</h1>
    </>
  );
};

CounterT.defaultProps = {
    base: 0,
    time: 1000

}

export default CounterT;