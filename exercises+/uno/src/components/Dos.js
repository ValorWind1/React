import React from 'react'

function Dos (props){
    const completeStyle = {
        fontStyle : "italic",
        color : "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div>
            <input type="checkbox" checked = {props.haha.completed} onChange = {(event) => props.handleChange(props.haha.id)} />
            <p style = {props.haha.completed ? completeStyle : null}>Remember to: {props.haha.text}</p>
        </div>
    )
}

export default Dos