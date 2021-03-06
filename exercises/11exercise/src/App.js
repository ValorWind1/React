import React from 'react';
import TodosItem from './components/TodosItem';
import todosData from './todosData';



class App extends React.Component {
    
  constructor(){
      super()
      this.state = {
          todos: todosData    // this was an empty array todos : [] now it contains our todo Data 
          
      }
      this.handleChange = this.handleChange.bind(this);

  }

  handleChange(id) {
    this.setState((i)=> {
      const updatedTodos = i.todos.map(todoi => {
        if ( todoi.id === id) {
          todoi.completed = !todoi.completed
        }
        return todoi
      })
      return {
        todos: updatedTodos
      }
    })
    console.log("Changed", id)


  }

  render (){

    const todosss =  this.state.todos.map( i => <TodosItem key={i.id} i={i} 
      handleChange ={this.handleChange}
    />);

      return (
        <div className="todo-list">
        {todosss}
       </div>

          
      );

  }

}


export default App; 
