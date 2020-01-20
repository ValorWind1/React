import React from 'react'

const CharComponent =(props) => {

    const style1 = {
        display : 'inline-block',
        padding : '16px',
        margin : '16px',
        border : '1px solid black',
        textAlign : 'center' 
    }

    return (
        <div style ={style1}>
            <h1 onClick={props.clickbois}>{props.characters}</h1>
        </div>
    )
}

export default CharComponent