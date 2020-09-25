import React, { Component } from "react";

const Hello = () => {
  // return (
  //   <div className=' 'dummyClass'>
  //     <h1> Hello vishwas</h1>
  //   </div>
  // );
  // return React.createElement('div', null, "Hello Vishwas")
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Vishwas")
  );
};
export default Hello;
