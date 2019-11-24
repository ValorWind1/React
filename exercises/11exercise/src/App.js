import React from 'react';
import TodosItem from './components/TodosItem';
import todosData from './todosData';


function App () {

  const todosss =  todosData.map( i => <TodosItem key={i.id} i={i} />);

  return (
    <div className="todo-list">
     {todosss}
    </div>
  );
}

export default App; 
