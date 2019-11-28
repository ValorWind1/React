import React from 'react'

class App extends React.Component{
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

      <main>
        <form>
          <input
          type = 'text'
          placeholder="First Name" 
          value = {this.state.firstName}
          name = "firstName"
          onChange = {this.handleChange}
          />

          <br />

          <input 
          type = 'text'
          placeholder="Last Name" 
          value = {this.state.lastName}
          name = "lastName"
          onChange = {this.handleChange}

           />
           <br />
          


          <input 
          type = 'number'
          placeholder="Age" 
          value = {this.state.age}
          name = "age"
          onChange = {this.handleChange}

           />
           <br />

           <label>

           <br />

          <input 
              type="radio"
              name ="gender"
              value ="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}  
          /> male
        </label>

        <label>
          <input 
              type="radio"
              name ="gender"
              value = "Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}  
          /> female
        </label>

          <br />

          <label> Destination: </label>
         <select 
            value={this.state.destination}
            onChange = {this.handleChange}
            name ="destination"
         >
           <option value ="Paris">Paris</option>
           <option value ="Rome">Rome</option>
           <option value ="Munich">Munich</option>
       
         </select>
         <br />

         Dietary Restrictions
         <br /> 
         <label>
         
          <input 
              type="checkbox"
              name ="vegetarian"
              checked={this.state.diet}
              onChange={this.handleChange}  
          />  Vegetarian 
        </label>
        <label>
         
          <input 
              type="checkbox"
              name ="kosher"
              checked={this.state.diet}
              onChange={this.handleChange}  
          />  Kosher 
        </label>
        <label>
         
          <input 
              type="checkbox"
              name ="lactose"
              checked={this.state.diet}
              onChange={this.handleChange}  
          />  Lactose Free
        </label>



          <br />
          <br></br>
          <hr ></hr>
          <h1>Entered Information : </h1>
          <h4>First Name: {this.state.firstName}</h4>
          <h4>Last Name: {this.state.lastName}</h4>
          <h4>Age: {this.state.age}</h4>
          <h4>Gender: {this.state.gender}</h4>
          <h4>Destination: {this.state.destination}</h4>
          <h4>Dietary Restrictions: {this.state.kosher}</h4>



        </form>
      </main>
      

      
    )
  }
}

export default App ;


//https://coursework.vschool.io/travel-form/