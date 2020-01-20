import React from 'react'

const ValidationComponent = (props) => {

    let msg ;
    if (props.lengthof1 <= 5) {
        msg = "ur good homey"

    }else {
        msg =  "sorry ur too big"
    }
    
    return (
        <div>
            {msg}
        </div>
    )
}



export default ValidationComponent