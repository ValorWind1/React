import React from "react";

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      firstName : " ",
      lastName : " ",
      isFriendly: true,
      gender: "",
      favColor : "blue"

    }
  }
  
  handleChange = (event) => {
    const {name, value , type, checked} = event.target
    type === "checkbox" ? this.setState({[name]:checked})  :  this.setState ({ 
      // [event.target.name]: event.target.value
      [name] : value
    
    });
  };

  render() {
    return (

      <form>

        <input type="text" value={this.state.firstName} name="firstName" placeholder="first Name" onChange={this.handleChange} />
        <br></br>

        <input type="text" value={this.state.lastName} name="lastName" placeholder="last Name" onChange={this.handleChange} />

        <textarea value={"some txt"} onChange={this.handleChange} />
        <br></br>
        <label>
        <input type="checkbox" checked={this.state.isFriendly} onChange={this.handleChange} name ="isFriendly"  />Friendly ?</label>

        <label>
        <input type="radio" checked={this.state.gender === "female"} value="female" onChange={this.handleChange} name ="gender"  />Female</label>

        <label>
        <input type="radio" value="male" checked={this.state.gender === "male"} onChange={this.handleChange} name ="gender"  />Male</label>

        <select value ={this.state.favColor} onChange={this.handleChange} name="favColor">
          <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="yellow">yellow</option>
        </select>

        <button onClick>Submit</button>

    <h1>{this.state.firstName} {this.state.lastName}
    
    {this.state.gender} {this.state.favColor}
    </h1>

      </form>

    );
  }
}

export default App;
