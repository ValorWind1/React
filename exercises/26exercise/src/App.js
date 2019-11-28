import React from 'react'

//documentation
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

// address fot the Star Wars API which is cors enable ! 
// https://swapi.co/

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loading : false,
      character : {

      }

    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  // fetch is an easy promise built in javascript tool . 
  // in order to perform http request so we can get data that we need . 
  // fetch is a global function
  componentDidMount(){
    this.setState ({
      loading : true
    })
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading : false,
        character : data
      })
    })
      // we need to save the data to our state in order to keep , and not lose our data
  }


  render(){
    const text = this.state.loading ? "Loading ... " : this.state.character.name
    return(

      <div>
        <h1>Using the Star Wars API </h1>
         
        <h3>{text}</h3>

      </div>
    );
  }
}


export default App ; 