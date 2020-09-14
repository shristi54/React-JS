import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponenets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(ChildName) {
    alert("Hello " + this.state.parentName + " from " + ChildName);
  }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponenets;
