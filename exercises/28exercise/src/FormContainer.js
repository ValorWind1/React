import React from 'react'
import FormComponent from './FormComponent'

class FormContainer extends React.Component{
  constructor(){
    super()
    this.state = { 
      firstName : "",
      lastName: "",
      age: "", 
      gender : "",
      destination : "",
      vegetarian: false,
      kosher : false,
      lactose :false

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event){ 
    const{name,value,type,checked} = event.target 
    type === "checkbox" ? this.setState({[name] : checked }) :
    this.setState({
      
      [name] : value
    
    
    })
    

  }
  render(){
    return(
    
    <FormComponent
      handleChange= {this.handleChange}
      // firstName={this.state.firstName}
      data ={this.state}
     />
     )
      
  }
}

export default FormContainer ;


//https://coursework.vschool.io/travel-form/