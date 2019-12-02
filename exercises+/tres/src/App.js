import React from 'react'


class App extends React.Component {
  constructor(){
    super()
    this.state = {

      count : 0

    }
    this.countingup = this.countingup.bind(this)
  }

  countingup (){
    this.setState((i) => {
      return {
        count : i.count +1 
      }
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick= {this.countingup} >Count</button>
      </div>

    )
  }
}


export default App