import React from 'react'
import Logged from './Logged';

class App extends React.Component{
  constructor(){
    super()
    this.state = {

      isNotLogged : true
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount(){
  //   setTimeout(() =>{
  //     this.state = {
  //       isNotLogged : false
  //     }
  //   },1500)
  // }


  handleClick () { 
    this.setState((i) => {
      return {
        // !i.isNotlogged = give me w.e the oppposite is
        isNotLogged : !i.isNotLogged
      }
    })
  }


  render(){
    let buttonText = this.state.isNotLogged ? "Log Out" : "Log In"
    let screenText = this.state.isNotLogged ? "U ARE OUT" : "U ARE IN"

    return(

      <div>
        <button onClick = {this.handleClick}> {buttonText}</button>
        <h1> Status :  {screenText}</h1>
        {/* {this.state.isNotLogged ? <h1>Not logged in yet</h1> : 
        <Logged />
        }  */}


      </div>
    );
  }
}


export default App; 