import React from 'react';



class App extends React.Component{

  constructor(){
    super()
    this.state = {

      count : 0 
    }

    // we need to bind our class method to our class in order for the setState to work 
    this.ClickButton = this.ClickButton.bind(this);
  }

  ClickButton (){
    // very useful method setState from  extending the react.compoment 
    // we use it when we can to change the state 

    // one way to change the state if we dont care about the previous state will be 
    // to pass it as an object since state is an object 
      // this.setState({ count : 1 })

      //However if we do care about previous iteration ( must likely)
      // then we do this instead , we provide a function that returns the object literal
      this.setState((prevState) =>{
        return {
          count: prevState.count + 1  
        }
      })
    }

  render(){
    return(

      <div>
          <h1>{this.state.count}</h1>
          <button onClick = {this.ClickButton}>Change</button>
          {/* <ChildComponent count = {this.state.count} />  */}
          {/* if we had a child component this is how we would pass the state 
          and since we are passing the state component it will change along with 
          how the state is getting change in this component  */}

      </div>

    )
  }
}



export default App

