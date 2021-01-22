import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 24 },
      { name: 'Stephanie', age: 25 },
    ],
    otherState: 'Some other state',
    showPersons: false
  }

  onClickSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Manu', age: 24 },
        { name: 'Stephanie', age: 25 },
      ]
    })
  };

  onChangeName = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 23 },
        { name: event.target.value, age: 24 },
        { name: 'Stephanie', age: 25 },
      ]
    })
  }

  onClickTogglePerson = () => {
    console.log(this.state.showPersons)
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App" >
        <h1 className="App-title">Welcome to React</h1>
        <button
          style={style}
          onClick={this.onClickTogglePerson}>
          Toggle Persons
        </button>

        {
          (this.state.showPersons) ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age} />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.onClickSwitchName.bind(this, 'New Name 1')}
                changed={this.onChangeName}>
                My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
        }
      </div>
    );
  }
  // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'React App'));
}

export default App;
