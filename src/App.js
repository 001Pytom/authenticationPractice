// import Form from "./form";
import React, { useState } from "react";

// const isLoggedIn = false;
// function App() {
//   return (
//     <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Form />}</div>
//   );=
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
// import cars from "./practice";

// function App() {
//   const [honda, tesla] = cars;
//   const {
//     speedStats: { topSpeed: teslaTopSpeed },
//   } = tesla;
//   const {
//     speedStats: { topSpeed: hondaTopSpeed },
//   } = honda;
//   const {
//     coloursByPopularity: [hondaTopColour],
//   } = honda;
//   const {
//     coloursByPopularity: [teslaTopColour],
//   } = tesla;
//   return (
//     <table>
//       <tr>
//         <th>Brand</th>
//         <th>Top Speed</th>
//       </tr>
//       <tr>
//         <td>{tesla.model}</td>
//         <td>{teslaTopSpeed}</td>
//         <td>{teslaTopColour}</td>
//       </tr>
//       <tr>
//         <td>{honda.model}</td>
//         <td>{hondaTopSpeed}</td>
//         <td>{hondaTopColour}</td>
//       </tr>
//     </table>
//   );
// }

// handling event listeners
// function App() {
//   const [headingText, setHeadingText] = useState("hello");
//   const [isMouseOver, setisMouseOver] = useState(false);
//   function updateText() {
//     setHeadingText("submitted");
//   }

//   function hover() {
//     setisMouseOver(true);
//   }

//   function out() {
//     setisMouseOver(false);
//   }
//    return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button
//         style={{
//           backgroundColor: isMouseOver ? "black" : "white",
//         }}
//         onClick={updateText}
//         onMouseOver={hover}
//         onMouseOut={out}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// reacts forms

// function App() {
//   const [name, setName] = useState("");
//   const[click, setclick]=useState("")
//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   function handleBtnChange(){
//    setclick(name)

//   }
//   return (
//     <div className="container">
//       <h1>Hello {click}</h1>
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="What's your name?"
//         value={name}
//       />
//       <button onClick={handleBtnChange}>Submit</button>
//     </div>
//   );
// }

// react form for having both fnam and lname show
// function App() {
//   const [fullname, setFullname] = useState({
//     fName: "",
//     lName: "",
//   });

//   function displayName(e) {
//     const { value, name } = e.target;

//     setFullname((prevName) => {
//       if (name === "fName") {
//         return {
//           fName: value,
//           lName: name.lName,
//         };
//       } else if (name === "lName") {
//         return {
//           lName: value,
//           fName: name.fName,
//         };
//       }
//     });
//   }
//   return (
//     <div className="container">
//       <h1>
//         Hello {fullname.fName} {fullname.lName}
//       </h1>
//       <form>
//         <input
//           name="fName"
//           placeholder="First Name"
//           onChange={displayName}
//           value={fullname.fName}
//         />
//         <input
//           onChange={displayName}
//           name="lName"
//           placeholder="Last Name"
//           value={fullname.lName}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// code challenge'
function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function displayDetails(e) {
    const { name, value } = e.target;
    setContact((prevData) => {
      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: name.prevData,
      //     email: name.prevData,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     lName: value,
      //     fName: name.prevData,
      //     email: name.prevData,
      //   };
      // } else if (name === "email") {
      //   return {
      //     lName: name.prevData,
      //     fName: name.prevData,
      //     email: value,
      //   };
      // }

      // use spread operator instead
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={contact.fName}
          onChange={displayDetails}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
          onChange={displayDetails}
        />
        <input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={displayDetails}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
