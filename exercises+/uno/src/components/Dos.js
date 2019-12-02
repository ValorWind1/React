import React from 'react'

function Dos (props){
    return (
        <div>
            <input type="checkbox" checked = {props.haha.completed} onChange = {(event) => props.handleChange(props.haha.id)} />
            <p>Remember to: {props.haha.text}</p>
        </div>
    )
}

export default Dos