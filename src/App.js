// import Form from "./form";
import React, { useState } from "react";

// const isLoggedIn = false;
// function App() {
//   return (
//     <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Form />}</div>
//   );
// }

// another one, challenge

// let userIsRegistered = false;

// function App() {
//   return (
//     <div className="container">
//       <Form isregistered={userIsRegistered} />
//     </div>
//   );
// }

// another Challange
// hooks

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="container">
//       <h1>{count}</h1>

//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }

// hooks practice

// function App() {
//   setInterval(increase, 1000);

//   let time = new Date().toLocaleTimeString();
//   const [showtime, setTime] = useState(time);
//   function increase() {
//     let newtime = new Date().toLocaleTimeString();
//     setTime(newtime);
//   }
//   return (
//     <div className="container">
//       <h1>{showtime}</h1>
//       <button onClick={increase}>Get Time</button>
//     </div>
//   );
// }

// destructuring
import cars from "./practice";

function App() {
  const [honda, tesla] = cars;
  const {
    speedStats: { topSpeed: teslaTopSpeed },
  } = tesla;
  const {
    speedStats: { topSpeed: hondaTopSpeed },
  } = honda;
  const {
    coloursByPopularity: [hondaTopColour],
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour],
  } = tesla;
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </table>
  );
}

export default App;
