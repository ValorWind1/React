import React from 'react' 


const Todo = (props) => {
    return (
        <div>
            <h2>Text : {props.text}</h2>
            
            Completed : <input type="checkbox" checked={props.completed} onChange={(event) =>props.checkedit()}
            
            />

        </div>
    )
}



export default Todo ;