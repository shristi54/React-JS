import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from ".//components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/hello";
import Message from "./components/message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponenets from "./components/ParentComponents";
import UserGreeting from "./components/UserGreeting";
import Namelist from "./components/Namelist";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Form />
        {/* <Inline /> */}
        {/* <Stylesheet primaryclass={true} /> */}
        {/* <Namelist /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponenets /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children</p>
        </Greet>
        <Greet name="Clark" heroName="Superman" />
        <button>Action</button>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Bruce" heroName="Batman" /> */}
      </div>
    );
  }
}

export default App;
