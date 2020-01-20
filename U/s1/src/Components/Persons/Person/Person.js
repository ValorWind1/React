import React from "react";
import "./Person.css";
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends React.Component{
  constructor (props){
    super(props);

    this.inputElementRef = React.createRef ();

  }

  static contextType = AuthContext;

  componentDidMount () {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated)
  }

  render(){
    console.log('person.js rendering ... ')

   
  return (
    <Aux>
      
       {this.context.authenticated ? <p>Authenticated ! </p> : <p>Please log in !</p>}
     
    <div className='Person'>
      
      <p onClick={this.props.clikingboi}>
        My name is {this.props.name} and I'm {this.props.age} old !
      </p>
      <input 
      type="text" 
      // ref={(inputEl) => {this.inputElement = inputEl}} 
      ref = {this.inputElementRef}
      onChange={this.props.changed} 
      value={this.props.name} 
      />
      <p>{this.props.children}</p>
    </div>
    </Aux>

    );
  };
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed : PropTypes.func

}

export default Person;
