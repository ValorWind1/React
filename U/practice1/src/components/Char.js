import React from 'react'

const Char = (props) => {

    const style7 = {
        display : 'inline-block',
        padding : '16px',
        margin : '16px',
        border : '1px solid black',
        textAlign : 'center' 
    }

    return (
        <div style={style7}>
            
             <h3>Char Components</h3>
             <h4 onClick={props.remove}>{props.char} </h4>
           
        </div>
    )
}

export default Char