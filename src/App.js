import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is React app</h1>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
        <Person name="Min" age="26" />
      </div>
    );
  }
}

export default App;
