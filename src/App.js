import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" }
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked?');
  }

  render() {
    return (
      <div className="App">
        <h1>This is React app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;
