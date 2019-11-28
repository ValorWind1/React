import React from 'react'

// documentation on forms 
// https://reactjs.org/docs/forms.html

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly : true,
      gender: "",
      favColor: "red"

    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState( { [ name ] : checked })   : this.setState({
    //  [ event.target.name ]: event.target.value  . this works beutiful but it may give us bugs 
    // so we extracte it to a varaible first the one above  
      [name] : value 
    })
    // target represents the element which was fired 
  }

  handleSubmit(){
    // submit the form to an api or something like that 

  }
  render() {
    return(

      <form onSubmit = {this.handleSubmit}>
        <input 
          type="text" 
          value ={this.state.firstName} 
          name="firstName" 
          placeholder="first name" 
          onChange={this.handleChange} 

          />

        <br />

        <input 
          type="text" 
          value ={this.state.lastName} 
          name="lastName" 
          placeholder="last name" 
          onChange={this.handleChange} 

        />


        {/* /**
        other useful form elements : 

        <textarea /> element   = this is a big adjustable input box , takes value 
        <input  type="checkbox" />   = input type , checked is boolean , checboxes maintain boolean in state 
        <input type ="radio" /> = kinda like a mix between checkboxes and input type text
        <select> and  <option> elements 
    
         */ }

         <textarea value = {"Some deafult Value"} onChange={this.handleChange} />
         <br />
         <label>
          <input 
              type="checkbox"
              name ="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}  
          /> is Friendly ? 
        </label>

         <br />

        <label>
          <input 
              type="radio"
              name ="gender"
              value ="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}  
          /> male
        </label>

        <label>
          <input 
              type="radio"
              name ="gender"
              value = "female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}  
          /> female
        </label>

         <br />
         <label> Favorite Color: </label>
         <select 
            value={this.state.favColor}
            onChange = {this.handleChange}
            name ="favColor"
         >
           <option value ="red">red</option>
           <option value ="black">black</option>
           <option value ="white">white</option>
           <option value ="red">red</option>
           <option value ="black">black</option>
           <option value ="white">white</option>
         </select>

         {/* formik = awesome library to write easy forms  */}
        <h1>{this.state.firstName}  {this.state.lastName} </h1>
        <h2> You are a {this.state.gender} </h2>
        <h2>You favorite color is {this.state.favColor}</h2>
        {/* buttons can work as a  submit  */}
        <button >Submit</button>
        
      </form>
    )
  }
}


export default App 