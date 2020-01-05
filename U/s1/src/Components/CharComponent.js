import React from 'react'

const CharComponent = (props) => {
    const style1  = {
        display : 'inline-block',
        padding : '16px',
        margin : '16px',
        border : '1px solid black',
        textAlign : 'center'  
    };
    return (
        <div onClick = {props.deleteit} style ={style1}>
            {props.character}

        </div>
    )
}

export default CharComponent