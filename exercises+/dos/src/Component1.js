import React from 'react'

function Component1 (props){
    return(

        <div>

            <input type = "checkbox" checked = {props.tooo.completed} />
            <h4>{props.tooo.text}</h4>
            <hr></hr>
            
            

        </div>
    )
}



export default Component1