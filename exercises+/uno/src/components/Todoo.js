import React from 'react'


function Todoo (props){
    console.log(props.hacer)
    return (

    <div style={{color: "#ff8c00"}}>
        <input type ="checkbox" name="option 1"  checked={props.hacer.completed}></input> 
        <p>text : {props.hacer.text}</p>

    </div>

    )
}



export default Todoo 
