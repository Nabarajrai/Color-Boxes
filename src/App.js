// import React from "react";
import "./App.css";
// // import BoxContainer from "./boxContainer";

// function App() {

//   return (
//     <div className="App">
//       <h2>Form Validation</h2>
//       <form>
//         <label for="name">Name</label>
//         <input type="text" />
//       </form>
//     </div>
//   );
// }

// export default App;
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(proos) {
//     super(proos);
//     this.state = {
//       name: "",
//     };
//   }

//   handleChange = (evt) => {
//     evt.preventDefault();
//     this.setState({ name: evt.target.value });
//   };

//   // handleSubmit = () => {
//   //   alert(`Your user name is:${this.state.name}`);
//   //   this.setState({ name: "" });
//   // };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Your user name is:${this.state.name}`);
//     this.setState({ name: "" });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h2>Form Validation</h2>
//         <form onClick={this.handleSubmit}>
//           <label>Name</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={this.handleChange}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// export class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userName: "",
//       userEmail: "",
//       password: "",
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Multiple Form</h1>
//         <form>
//           <input
//             name="userName"
//             type="text"
//             onChange={this.handleChange}
//             placeholder="Please enter your name ?"
//           />

//           <input
//             name="userEmail"
//             type="email"
//             onChange={this.handleChange}
//             placeholder="Please enter your email ?"
//           />
//           <input
//             name="password"
//             type="password"
//             onChange={this.handleChange}
//             placeholder="Please enter your passowrd"
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
// import Shopping from "./Shopping";
import BoxList from "./BoxList";

const App = () => {
  return (
    <div className="App">
      <BoxList />
    </div>
  );
};

export default App;
