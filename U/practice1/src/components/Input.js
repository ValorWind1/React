import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changeName}
             value={props.default}/>
            <h4>You have currently typed : {props.length} of Characters </h4>
            
        </div>
    )
}


export default Input