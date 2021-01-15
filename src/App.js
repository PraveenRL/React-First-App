import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <Person />
        </header>
      </div>
    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'React App'));
  }
}

export default App;
