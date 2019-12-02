import React from 'react'

function handleChange (){
    console.log("Check !")
}

function Component1 (props){

    

    return(

        <div>

            <input type = "checkbox" checked = {props.tooo.completed} onChange = {(event) =>props.handleChange(props.tooo.id)} />
            <h4>{props.tooo.text}</h4>
            <hr></hr>
            
            

        </div>
    )
}



export default Component1