import React from 'react'
import './output.css';

const UserOutPut = (props) => {

    let style = {
        color : 'green',
        textAlign : 'center'
    }

    return (
        <div className = "out">
            <p>heloooooo : {props.username}</p>
            <p style={style}>random stuff</p>
        </div>
    )
}


export default UserOutPut