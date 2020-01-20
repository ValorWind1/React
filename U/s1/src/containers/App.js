import React from "react";
import AuthContext from '../context/auth-context'
import "./App.css";
import ValidationComponent from "../Components/ValidationComponent";
import CharComponent from "../Components/CharComponent";
import ErrorBoundary from '../Components/ErrorBoundary'
import Persons from '../Components/Persons/Persons'
import Cockpit from "../Components/Cockpit/Cockpit";
import WithClass from '../hoc/WithClass'


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
      defaulttext: "",
      showCockpit: true,
      counter : 0 ,
      authenticated : false
    };
  }

  static getDerivedStateFromProps(props,state) {
    console.log('App.js , getderivedstatfrompops', props)
    return state ; 
  }

  componentDidMount(){
    console.log('app.js componentdidmount')
  }

  shouldComponentUpdate(nextProps , nextState) {
    console.log("app.js shouldcomponentUpdate")
    // return false; // preventing update 
    return true;
  }

  componentDidUpdate(){
    console.log('app.js componentdidupdate')
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

    this.setState((prevState , props) => {
      return {
      people:  pepl,
      counter: prevState.counter + 1 
      }
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

  loginHandler = () => {
    this.setState({authenticated : true})
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
          isAuthenticated = {this.state.authenticated}
          />
        </div>

      );
    }


    return (
      
      <div className="App">
        <button onClick={() => {this.setState({showCockpit : false})}}>Remove Cockpit</button>

        <AuthContext.Provider value ={{authenticated : this.state.authenticated , login : this.loginHandler}}> 
        {this.state.showCockpit ? 
        (<Cockpit toggle = {this.togglePersonsHandler}  title={this.props.appTitle}/> ) : null}
        <p>{this.state.counter}</p>
        {persons}
        </AuthContext.Provider>
        
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
