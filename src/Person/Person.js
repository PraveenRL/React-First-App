import React from 'react';

const person = (props) => { //props -> can be any name
    return (
        <div>
            <p>I'm a {props.name}, I'm {props.age} old</p>
            <p>{props.children}</p>
        </div>
    );
}

export default person;