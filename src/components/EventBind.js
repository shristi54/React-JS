import React, { Component } from "react";
import Hello from "./hello";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: "GoodBye!!"
  //   });
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: "GoodBye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  --- 1st type*/}
        {/* <button onClick={() => this.clickHandler()}>Click</button> ------ 2nd type */}
        <button onClick={this.clickHandler}>Click</button>
        {/* 4th and 3rd type */}
        {/* go to constructor. */}
      </div>
    );
  }
}

export default EventBind;
