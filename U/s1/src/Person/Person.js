import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className='Person'>
      <p onClick={props.clikingboi}>
        My name is {props.name} and I'm {props.age} old !
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
