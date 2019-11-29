import React from 'react'

function FormComponent (props){
    
    return(

        <main>
          <form>
            <input
            type = 'text'
            placeholder="First Name" 
            value = {props.data.firstName}
            name = "firstName"
            onChange = {props.handleChange}
            />
  
            <br />
  
            <input 
            type = 'text'
            placeholder="Last Name" 
            value = {props.data.lastName}
            name = "lastName"
            onChange = {props.handleChange}
  
             />
             <br />
            
  
  
            <input 
            type = 'number'
            placeholder="Age" 
            value = {props.data.age}
            name = "age"
            onChange = {props.handleChange}
  
             />
             <br />
  
             <label>
  
             <br />
  
            <input 
                type="radio"
                name ="gender"
                value ="Male"
                checked={props.data.gender === "Male"}
                onChange={props.handleChange}  
            /> male
          </label>
  
          <label>
            <input 
                type="radio"
                name ="gender"
                value = "Female"
                checked={props.data.gender === "Female"}
                onChange={props.handleChange}  
            /> female
          </label>
  
            <br />
  
            <label> Destination: </label>
           <select 
              value={props.data.destination}
              onChange = {props.handleChange}
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
                checked={props.data.diet}
                onChange={props.handleChange}  
            />  Vegetarian 
          </label>
          <label>
           
            <input 
                type="checkbox"
                name ="kosher"
                checked={props.data.diet}
                onChange={props.handleChange}  
            />  Kosher 
          </label>
          <label>
           
            <input 
                type="checkbox"
                name ="lactose"
                checked={props.data.diet}
                onChange={props.handleChange}  
            />  Lactose Free
          </label>
          <br />
          <br />
          <button>Submit</button>
  
  
            <br />
            <br></br>
            <hr ></hr>
            <h1>Entered Information : </h1>
            <h4>First Name: {props.data.firstName}</h4>
            <h4>Last Name: {props.data.lastName}</h4>
            <h4>Age: {props.data.age}</h4>
            <h4>Gender: {props.data.gender}</h4>
            <h4>Destination: {props.data.destination}</h4>
            <h4>Dietary Restrictions: </h4>
            <p>
                 Vegetarian: {props.data.vegetarian ? "Yes" : "No"} </p>
                <p>Kosher:{props.data.kosher ? "Yes" : "No"}</p> 
                <p>Lactose Free:{props.data.lactose ? "Yes" : "No"} </p> 
  
          
          </form>
        </main>
        
  
        
      )
}

export default FormComponent