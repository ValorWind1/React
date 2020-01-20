import React from 'react'

const LengthComponent =(props) => {
    return (
        <div>
            <input onChange={props.changes} />
            <h1>Lenght : {props.lengthof}</h1>
            <h1>Current String : {props.currentS}</h1>
        </div>
    )
}

export default LengthComponent