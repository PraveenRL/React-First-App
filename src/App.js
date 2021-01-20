import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 23 },
      { name: 'Manu', age: 24 },
      { name: 'Stephanie', age: 25 },
    ]
  });

  const [otherState] = useState('Some other state');

  console.log(personsState, otherState)

  const onClickSwitchName = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 23 },
        { name: 'Manu', age: 24 },
        { name: 'Stephanie', age: 25 },
      ]
    })
  };

  const onChangeName = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 23 },
        { name: event.target.value, age: 24 },
        { name: 'Stephanie', age: 25 },
      ]
    })
  }

  return (
    <div className="App">
      <h1 className="App-title">Welcome to React</h1>
      <button onClick={onClickSwitchName.bind(this, 'New Name 1')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={() => onClickSwitchName('New Name 2')}  /* Inefficient */
        changed={onChangeName}>
        My Hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'React App'));
}

export default app;
