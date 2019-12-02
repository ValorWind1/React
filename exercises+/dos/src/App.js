import React from 'react'
import todoData from './data/todo'
import Component1 from './Component1'

 
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      arraytodos : todoData

    }
    this.handleChange = this.handleChange.bind(this)
  }

  
  handleChange(id) {
    this.setState((i) => {
      const updatedTodos = i.arraytodos.map((i) => {

        if(i.id === id ) {
          i.completed = !i.completed
        }
        return i
      } )
      return {
        arraytodos : updatedTodos
      }
      
      })
      
      console.log("checked" , id)
    }

    
  render (){
    const ops = this.state.arraytodos.map ((i) => <Component1  key={i.id} tooo={i} handleChange={this.handleChange} />)
    
    return(
      <div>
        {ops}
      </div>


    )
  }
}


export default App