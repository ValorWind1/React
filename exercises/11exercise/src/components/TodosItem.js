import React from 'react';


function TodosItem (props){
    return(

        <div className="todo-item">
            <input type="checkbox" checked={props.i.completed}/>
            <p>{props.i.text}</p>
            
            <hr></hr>
        </div>


    );



}

export default TodosItem;