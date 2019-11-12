import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid';
import axios from 'axios';


class App extends React.Component {
state = {
todos: []
}

componentDidMount () {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}))
}

// Toggle Complete 
markComplete = (id) => {
  this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

// Delete Todo
delTodo = (id) => {
axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
}

//Add Todo 
AddTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos',{title,completed:false })
  .then(res =>  this.setState({todos:[...this.state.todos, res.data]}));

  // used this before working with an api 
  // const newTodo = {
  //   id : uuid.v4(),
  //   title: title,
  //   completed: false
  // }
 

}


render () {
 
  return (
    <Router>
        <div className="App">
          <div className = "container">
            <Header />
            <Route exact path="/" render={props=> (<React.Fragment>
              <AddTodo AddTodo={this.AddTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment> )} />
            <Route path="/about" component={About} />
        </div>
        </div>
    </Router>
  );
 }
}

export default App;
