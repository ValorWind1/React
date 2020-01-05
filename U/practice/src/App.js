import React from 'react'
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username : 'Dan1*'
    }
  }

  changeHandler = (event) => {
    this.setState ({username : event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <UserInput changeit = {this.changeHandler} twoway = {this.state.username}/>
        <UserOutput username = {this.state.username} />
        <UserOutput username = "Dan$$$" />
        <UserOutput username = {this.state.username}/>

      </div>
    )
  }
}

export default App