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

  const [otherState, setOtherState] = useState('Some other state');

  console.log(personsState, otherState)

  const onClickSwitchName = () => {
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 23 },
        { name: 'Manu', age: 24 },
        { name: 'Stephanie', age: 25 },
      ]
    })
  };

  return (
    <div className="App">
      <h1 className="App-title">Welcome to React</h1>
      <button onClick={onClickSwitchName}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
        My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, 'React App'));
}

export default app;
