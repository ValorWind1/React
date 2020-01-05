import React from "react";

import "./App.css";
import ValidationComponent from "../Components/ValidationComponent";
import CharComponent from "../Components/CharComponent";
import ErrorBoundary from '../Components/ErrorBoundary'
import Persons from '../Components/Persons/Persons'
import Cockpit from "../Components/Cockpit/Cockpit";


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

  static getDerivedStateFromProps(props,state) {
    console.log('App.js , getderivedstatfrompops', props)
    return state ; 
  }

  // componentDidMount(){
  //   console.log('app.js componentdidmount')
  // }



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
    console.log('App.js render')

    let charList = this.state.defaulttext.split('').map((ch , index) => {
      return <CharComponent character={ch} key={index} deleteit={() => this.deleteChar(index)} />;
    });


    let persons = null ; 

    if (this.state.showPersons === true) {
      persons = (

        <div>
          <Persons 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.changedHandler}
          />
        </div>

      );
    }


    return (
      <div className="App">
       <Cockpit toggle = {this.togglePersonsHandler} title={this.props.appTitle}/>
        
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
