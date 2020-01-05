import React from "react";
import "./Person.css";

class Person extends React.Component{
  constructor (props){
    super(props);

  }
  render(){
    console.log('person.js rendering ... ')

  
  
  return (
    <div className='Person'>
      <p onClick={this.props.clikingboi}>
        My name is {this.props.name} and I'm {this.props.age} old !
      </p>
      <input type="text" onChange={this.props.changed} value={this.props.name} />
      <p>{this.props.children}</p>
    </div>
  );
};
}

export default Person;
