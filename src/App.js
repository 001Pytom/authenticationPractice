import Form from "./form";

// const isLoggedIn = false;
// function App() {
//   return (
//     <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Form />}</div>
//   );
// }

// another one, challenge

let userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form isregistered={userIsRegistered} />
    </div>
  );
}

export default App;
