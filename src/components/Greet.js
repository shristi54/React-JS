import React, { Component } from "react";

// function Greet() {
//   return <h1>Hello Vishwas</h1>;
// }

//DESTRUCTURING---1---
// const Greet = ({name,heroName}) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };
//DESTRUCTURING---2----
// const Greet = (props) => {
//   const {name,heroName,children}= props
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {children}
//     </div>
//   );
// };
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
