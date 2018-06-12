import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserList from "./UserList";

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <UserList/>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
