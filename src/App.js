import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Person name="Max" age="22" />
          <Person name="Manu" age="23">My Hobbies: Racing</Person>
          <Person name="Stephanie" age="24" />
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'React App'));
  }
}

export default App;
