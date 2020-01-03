import React from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        { name: "Max", age: 27 },
        { name: "Braun", age: 25 },
        { name: "steph", age: 23 }
      ],
      otherState: "other value"
    };
  }

  switchNameHandler = newName => {
    // console.log('Was Clicked')
    this.setState({
      people: [
        { name: newName, age: 27 },
        { name: "Braun", age: 25 },
        { name: "steph", age: 20 }
      ]
    });
  };

  changedHandler = event => {
    this.setState({
      people: [
        { name: "Max", age: 27 },
        { name: event.target.value, age: 25 },
        { name: "steph", age: 18 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hello World !</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Maximilian!$")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
        />
        <Person
          clikingboi={this.switchNameHandler.bind(this, "Max!")}
          changed={this.changedHandler}
          name={this.state.people[1].name}
          age={this.state.people[1].age}
        >
          {" "}
          My Hobbies : Flying{" "}
        </Person>
        <Person
          name={this.state.people[2].name}
          age={this.state.people[2].age}
        />
      </div>
    );
  }
}

export default App;
