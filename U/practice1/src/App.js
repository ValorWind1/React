import React from "react";
import Input from './components/Input';
import Output from './components/Output'
import Char from './components/Char'
import Validation from "./components/Validation";
import Joke from './components/Joke';
import Product from './components/Product'
import ListData from './ProductList'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      us1 : "ValorFreedom",
      products : []
    };
  }

  nameHandlerChange = (event) => {
    this.setState ({ 
      us1 : event.target.value 
    })
  }
  
  charRemoveHandler = (index) => {
    let list8 = this.state.us1.split('')
    list8.splice(index,1)
    const updatedel = list8.join('')
    this.setState({us1 : updatedel  })
  }
  
    
  render() {

    let listproduct = ListData.map((i,id) => {
      return <Product products={i} key ={id} name={i.name} description = {i.description}/>
    })

    let listchar = this.state.us1.split('').map((i,index) => {
      return <Char char={i} key={i.index} remove={() => this.charRemoveHandler(index)}/>
    
    
    
    })
    
    return (
    <div>
      <Input changeName={this.nameHandlerChange} default={this.state.us1} length={this.state.us1.length}/>
      <Output username="daniel L."/>
      <Output username={this.state.us1} />
      <Output username={this.state.us1}/>
      <Output username="Gabriel M"/>
      <Validation length = {this.state.us1.length}/>
      {listchar}
      <hr />
      <br />
      <br /> 
      <Joke question= "Knock Knock" asnwer="yes" />
      <Joke question= "Knock Knock who " asnwer="No" />
      <Joke question= "Knock Knock why" asnwer="Why" />
      <hr />
      {listproduct}

      
      
    </div>
    )
  }
}

export default App;
