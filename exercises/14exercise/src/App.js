import React from 'react';

class App extends React.Component{
  // to introduce a state to this compoennt we wil ladda  constructor method \
  // constructor built in method is a method that initiliazes part of the class 
  constructor(){
      super() // super will go to the parent class and bring stuff from parent class so we can use in in our component
      this.state =  { 
        answer: "Yes"

      }
      //state is always an object
      // we can also pass the state toa child component
  }
  render(){
    return(
      <div>
        <h1>The State of the States</h1>
        <h1>Answer : {this.state.answer} </h1>
        {/* // ex passing state to a child component  */}
        <ChildComponent answer={this.state.answer} />
      </div>

    )
  }
}

export default App; 