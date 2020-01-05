import React from 'react'
import './UserOutput.css';

const style = {

    color: 'red'

}
const UserOutput = (props) => {
    return (
        <div className = "output">
            <p>Good evening this is a test textfield and : {props.username}</p>
            <p style ={style}> We are chekcking how effective we are at changing state</p>
        </div>
    )
}



export default UserOutput