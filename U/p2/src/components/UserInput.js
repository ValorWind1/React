import React from 'react'

const UserInput = (props) => {

    return(
        <div>
            <input type="text"  onChange={props.changing} 
            value={props.starting} />
        </div>
    )
}


export default UserInput