import React from "react";
import './Output.css'

const UserOutput = props => {
    const style = {
        color : 'green'
    };
  return (
    <div className="output">
      <p>Hello there: {props.uusername} </p>
      <p style ={style}>Generol Kenobi ! </p>
    </div>
  );
};

export default UserOutput;
