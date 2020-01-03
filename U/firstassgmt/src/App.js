import React from "react";
import "./App.css";
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "1$Dan$!1"
    };
  }

  changeHandler = event => {
    this.setState({
      username: event.target.value
    });
  };

  render() {

    return (
      <div className="App">
        <h1>Hi 1st Assigment ! </h1>
        <UserInput  changing={this.changeHandler} currentN={this.state.username}/>
        <UserOutput uusername={this.state.username} />
        <UserOutput uusername="Daniel" />
        <UserOutput uusername={this.state.username} />
      </div>
    );
  }
}
export default App;
