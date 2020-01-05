import React from "react";
import Person from "./Person/Person";
import "./App.css";
import ValidationComponent from "./Components/ValidationComponent";
import CharComponent from "./Components/CharComponent";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        { id: '1', name: "Max", age: 27 },
        { id: '2',name: "Braun", age: 25 },
        { id: '3',name: "steph", age: 23 }
      ],
      otherState: "other value",
      showPersons: false,
      defaulttext: ""
    };
  }

  deletePersonHandler = (pindex) => {
    // const pp = this.state.people.slice();
    const pp = [...this.state.people];
    pp.splice(pindex,1);
    this.setState({
      people : pp
    })

  }

  changedHandler = (event,id) => {

    const personIndex = this.state.people.findIndex( p => {
      return p.id === id;
    });

    const pep = { ...this.state.people[personIndex] };

    // const pep = Object.assign({}, this.state.persons[personIndex])

    pep.name = event.target.value;

    const pepl = [...this.state.people];
    pepl[personIndex] = pep

    this.setState({
      people:  pepl
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  };

  changeLength = (event,index) => {
    this.setState({defaulttext : event.target.value })
  };

  deleteChar = (index) => {
    // const chd = [...this.state.defaulttext.split('')];
    // chd.splice(index,1);
    // this.setState({ defaulttext : chd})

    const text = this.state.defaulttext.split('');
    text.splice(index,1);
    const updatedtext = text.join('');
    this.setState({defaulttext : updatedtext})
    
  }

  
  render() {

    let charList = this.state.defaulttext.split('').map((ch , index) => {
      return <CharComponent character={ch} key={index} deleteit={() => this.deleteChar(index)} />;
    });


    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      
    };

    let persons = null ; 

    if (this.state.showPersons === true) {
      persons = (

        <div>
          {this.state.people.map( (i, index) => {
              return <Person
              clikingboi = {() => this.deletePersonHandler(index)} 
              name={i.name} 
              age={i.age}
              key={i.id} 
              changed={(event) => this.changedHandler(event , i.id)}
              />
          })}
            {/* <Person
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
            /> */}
          </div>

      );
    }


    return (
      <div className="App">
        <h1>Hello World !</h1>
        <button
          style={style}
          // onClick={() => this.switchNameHandler("Maximilian!$")}
          onClick={this.togglePersonsHandler}
        >
          Switch Name
        </button>

        {persons}  

        <input type="text" onChange={this.changeLength} value={this.state.defaulttext}/>
        <p>{this.state.defaulttext}</p>
        {/* <h3>Length of paragraph is:{this.state.defaulttext.length}</h3>  */}
        <ValidationComponent length1 = {this.state.defaulttext.length} 
        />
        {charList}
        

      </div>
    );
  }
}

export default App;
