import React from 'react';
import { DEFAULT_ECDH_CURVE } from 'tls';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Hector",
      age:"33"


    }
  }

  render(){
    return(

      <div>
          <h1>{this.state.name}</h1>
          <h1>{this.state.age} years old</h1>


      </div>


    )
  }
}

export default App;