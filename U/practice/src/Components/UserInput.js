import React from 'react'

const UserInput = (props) => {
    return (
        <div>
            <input type="text" placeholder="something" onChange={props.changeit} value={props.twoway}/>
        </div>
    )
}



export default UserInput