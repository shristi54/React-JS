import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super();

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return (
      // ternary operator----------
      this.state.isLoggedIn ? (
        <div>Welcome Vishwas</div>
      ) : (
        <div>Welcome Guest</div>
      )
    );
  }
}

export default UserGreeting;

// constructor(props)
//   super(props)

//   this.state = {
//      isLoggedIn: true
//   };

//   render() {
//     return (
//       // ternary operator----------
//       this.state.isLoggedIn ?
//         <div>Welcome Vishwas</div> :
//         <div>Welcome Guest</div>

//     )
//     // if else operator----------------
//     // if (this.state.isLoggedIn) return <div>Welcome Vishwas</div>;
//     // else {
//     //   return <div>Welcome Guest</div>;
//     // }

//     };
// export default UserGreeting;
