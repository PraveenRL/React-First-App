import React from 'react';

const person = (props) => { //props -> can be any name
    return (
        <p>I'm a {props.name}, I'm {props.age} old</p>
    );
}

export default person;