import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {

      double : 1 ,
      half : 100000

    }

    this.DoubleNumber = this.DoubleNumber.bind(this); 
  }

  DoubleNumber(){
    this.setState((prevState) => {
      return{
      double : prevState.double * 2 }
    })
  }
  
  
  render (){

    return (

      <div>
        <h1>Doubling Nuumber : {this.state.double}</h1>
        <button onMouseOver = {this.DoubleNumber}> Double the Number Hover it !  </button>
      </div>

    );
  }
}



export default App ; 