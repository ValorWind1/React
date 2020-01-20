import React from 'react'

const ValidationComponent = (props) => {
    let validationmsg = " Text long enough";

    
    if(props.length1 <= 5){
        validationmsg = "Text too short";
    }

    return (
        <div>
            <h3>Length is : {props.length1}</h3>
            <h4>{validationmsg}</h4>
        </div>
    )
}

export default ValidationComponent