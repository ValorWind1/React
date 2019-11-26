import React from 'react';
import TodosItem from './components/TodosItem';
import todosData from './todosData';



class App extends React.Component {
    
  constructor(){
      super()
      this.state = {
          todos: todosData    // this was an empty array todos : [] now it contains our todo Data 
          
      }
  }

  render (){

    const todosss =  this.state.todos.map( i => <TodosItem key={i.id} i={i} />);

      return (
        <div className="todo-list">
        {todosss}
       </div>

          
      );

  }

}


export default App; 
