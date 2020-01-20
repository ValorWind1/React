import React from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutPut from './components/UserOutPut';
import LengthComponent from './components/LengthComponent'
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent'
import FormsEx from './components/FormsEx'


class App extends React.Component {
  state ={
    username : 'dan',
    textDefault : " "
  }


  changeHandler = (event) => {
    this.setState({
      username : event.target.value
    })
  }

  lengthChangesHandler =(event) => {
    this.setState({textDefault : event.target.value})
  }

 deleteHandler = (index) => {
  
  const del = this.state.textDefault.split('')
  del.splice(index,1)
  const updatedel = del.join('')
  this.setState({textDefault : updatedel})


 }

  render () {
    let charList = this.state.textDefault.split('').map((i , index) => {
      return <CharComponent key ={index} characters={i}  clickbois ={() => {this.deleteHandler(index)}} />
    })


    return (
      <div>
        <UserInput changing ={this.changeHandler} starting ={this.state.username}/>
        <UserOutPut username="Dan$$$"/>
        <UserOutPut username={this.state.username}/>
        <UserOutPut username={this.state.username} />
        <LengthComponent changes = {this.lengthChangesHandler} 
        lengthof ={this.state.textDefault.length}
        currentS= {this.state.textDefault}/>

        <ValidationComponent lengthof1={this.state.textDefault.length}/>

        {charList}

        <br></br>
        <hr></hr>
        <FormsEx />
        
      
      </div>
    )
  }
}

export default App;
