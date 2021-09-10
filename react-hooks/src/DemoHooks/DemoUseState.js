import React, { Component, useState } from "react";

// Merge
// class DemoUseState extends Component {
//   state = {
//     count: 0,
//     name: "hung",
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

const DemoUseState = () => {
  const [count, setCount] = useState({
    count: 1,
    name: "hung",
  });
  return (
    <div>
      <h1>{count.count}</h1>
      <button onClick={() => setCount({ count: 10 })}>Click me</button>
    </div>
  );
};
export default DemoUseState;
