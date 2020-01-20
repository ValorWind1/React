import React from 'react'

const Validation =(props) => {

    let length1 = 5 ;

    if(length1 <= props.length) {
        length1 = "Too long"
    }else {
        length1 = "Your good"
    }

    return (
        <div>
            <h3> Validation :{length1}</h3>
        </div>
    )
}


export default Validation 