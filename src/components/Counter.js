import React, { Component } from "react"; //rce

class Counter extends Component {
  constructor(
    props //rconst
  ) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increement() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );
    // console.log(this.state.count);

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  increementFive() {
    this.increement();
    this.increement();
    this.increement();
    this.increement();
    this.increement();
  }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increementFive()}>Increement</button>
      </div>
    );
  }
}

export default Counter;
