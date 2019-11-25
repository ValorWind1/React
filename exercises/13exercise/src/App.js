import React , {Component} from 'react'
import ReactDom from 'react-dom';

// Normally every function/component will be separately but 
// for the sake of demonstration we will have all our components 
// in this class 

class App extends React.Component{

render() {
return(
    <div>
      <Header username ="valorWind"/>
      <Greeting />
    </div>
    
    )
  }
}
export default App;


// 2 
class Header extends React.Component{

  render(){
    return(
      <header>
        <p>Welcome, {this.props.username} !</p>
      </header>
    )
  }

}

//3 
class Greeting extends Component{
render(){
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay
  if(hours < 12){
    timeOfDay = "Morning"

  } else if ( hours >= 12 && hours < 17 ){
    timeOfDay = "Afternoon"
  }else{
    timeOfDay = "Night"
  }
  return(

    <h1>Good {timeOfDay} to you , sir or madam! </h1>

  )
}

}

ReactDom.render(<App />, document.getElementById('root'));