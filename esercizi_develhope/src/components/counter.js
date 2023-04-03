/*import React, { useEffect, useState } from "react";
import CounterDisplay from "./counter";

const CounterT = function Counter(props) {
  CounterT.componentDidMount() {
    const [count, setCount] = useState(props.base);
  }
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

export default CounterT;*/

import React, { Component } from "react";
import CounterDisplay from "./counter";

class CounterT extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.base };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, this.props.time);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

CounterT.defaultProps = {
  base: 0,
  time: 1000,
};

export default CounterT;

//Il costruttore non è più necessario in questo caso
//Tale sintassi, tra l'altro, è valida solo per React gestito a classi.