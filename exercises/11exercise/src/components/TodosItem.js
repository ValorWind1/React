import React from 'react';

function TodosItem (props){
    const completedStyles = {
        fontSize : 30,
        fontStyle: 'italic',
        color : "#8914A3" ,
        textDecoration : "line-through"
    }
    

    return(

        <div className="todo-item">
            <input type="checkbox" checked={props.i.completed} onChange = {() => props.handleChange(props.i.id)}/>
            <p style ={props.i.completed ? completedStyles : null}>{props.i.text}</p>
            <hr></hr>
        </div>


    );

}

export default TodosItem;