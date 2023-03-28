const Welcome = (props) => {
    return(
        <>
        <p>Welcome, {props.name}</p>
        </>
    );
}

Welcome.defaultProps = {
    name: "You"
}

export default Welcome;


/*import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <p>Welcome, {this.props.name}!</p>;
  }
}

export default Welcome;*/
