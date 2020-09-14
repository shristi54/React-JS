import React, { Component } from "react";

class Welcome extends Component {
  state = {};
  render() {
    // return <h1>Class Components</h1>;
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}

export default Welcome;
