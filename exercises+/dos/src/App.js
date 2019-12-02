import React from 'react'
import todoData from './data/todo'
import Component1 from './Component1'

 
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      arraytodos : todoData

    }
  }
  render (){
    const ops = this.state.arraytodos.map ((i) => <Component1  key={i.id} tooo={i}  />)


    return(
      <div>
        {ops}
      </div>


    )
  }
}


export default App