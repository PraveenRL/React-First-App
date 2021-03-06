import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: "28" },
      { name: "Manu", age: "29" }
    ],
    otherState: "Some other value"
  }

  switchNameHandler = () => {
    //DONT DO THIS => this.state.persons[0].name = "Maximilian";
    this.setState({
      persons: [
        { name: "Maximilian", age: "38" },
        { name: "Manu", age: "29" }
      ]
    })
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
