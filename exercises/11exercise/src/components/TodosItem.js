import React from 'react';

function CheckBoxes (){
    console.log("I'm checking , and uncheking stuff")
}

function TodosItem (props){
    return(

        <div className="todo-item">
            <input type="checkbox" checked={props.i.completed} onChange = {CheckBoxes}/>
            <p>{props.i.text}</p>
            <hr></hr>
        </div>


    );

}

export default TodosItem;