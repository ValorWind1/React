import React from "react";
import Input from './components/Input';
import Output from './components/Output'
import Char from './components/Char'
import Validation from "./components/Validation";
import Joke from './components/Joke';
import Product from './components/Product'
import ListData from './ProductList'
import ApiHttp from './components/Api-Http'
import Todo from './components/Todo'
import todoDataList from './TodoList'
import Pokemon from './components/Pokemon'
import Counter from './components/Counter'


class App extends React.Component {

  constructor() {

    super();
    this.state = {
      us1 : "ValorFreedom",
      products : [],
      isLogged : false,
      todo : [],  

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
  
  LoggedHandler = () => {
    this.setState ((prevState,props) => {
      return {
        isLogged : !prevState.isLogged
      }
    })
  }


  checkHandler =(id) => {
    console.log("Changed ! " , id)
    this.setState(prevState => {

      const updatedTodos = prevState.todo.map((i) => {

        if (i.id === id) {
          i.completed = !i.completed
        }
        return i
      })
      return {todo : updatedTodos}
    })
  }
    

  render() {

    let todosList = todoDataList.map((i,id) => {

      // console.log(i.completed)

      return <Todo list={i} key={i.id} text={i.text} checkedit={() => this.checkHandler(id)} />
    })

    let listproduct = ListData.map((i,id) => {
      return <Product products={i} key ={id} name={i.name} description = {i.description} />
    })

    let listchar = this.state.us1.split('').map((i,index) => {
      return <Char char={i} key={i.index} remove={() => this.charRemoveHandler(index)} />
    })

    let Logged = this.state.isLogged ? "Logged Out" : "Logged In"
    let LoggedTxt = this.state.isLogged ? "Logged Out" : "Logged In"

    
    return (
    <div>
      <Input changeName={this.nameHandlerChange} default={this.state.us1} length={this.state.us1.length}/>
      <Output username="Daniel L. "/>
      <Output username={this.state.us1} />
      <Output username={this.state.us1}/>
      <Output username="Gabriel M. "/>
      <Validation length = {this.state.us1.length}/>
      {listchar}
      <hr />
      <Pokemon />
      <hr />
      <Counter />
      <hr />
     
      <hr />
      <br />
      <br /> 
      <Joke question= "Knock Knock" asnwer="yes" />
      <Joke question= "Knock Knock who " asnwer="No" />
      <Joke question= "Knock Knock why" asnwer="Why" />
      <hr />
      {listproduct}

      <button onClick={this.LoggedHandler}>{Logged}</button>
      <h1>{LoggedTxt}</h1>
      
      < hr />
      <ApiHttp />
      <hr /> 
      <br />
      <br />
      <h1>!-- TODO APP --!</h1>
      {todosList}

      <hr />
      <hr />
      
    </div>

    )
  }
}

export default App;
