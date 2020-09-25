import React from "react"; //rfce

function FunctionClick() {
  function clickHandler() {
    console.log("Button Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      {/* dont add paranthesis. shouldn't be func call clickHandler(), it should be only clickHandler  */}
    </div>
  );
}

export default FunctionClick;
