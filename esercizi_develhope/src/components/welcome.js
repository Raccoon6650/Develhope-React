import Age from "./age";

const Welcome = (props) => {
  return (
    <>
      <p>Welcome, {props.name}</p>
      {props.age > 18 && props.age < 65 && props.name === "John" ? <Age age={props.age} /> : null}
    </>
  );
};

Welcome.defaultProps = {
  name: "You",
  age: 70
  
};

export default Welcome;

/*import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}

export default Welcome;*/
