import React from 'react'

function Joke (props){
console.log(props)
    return (
    <div> 
        <h1 style ={{display: props.funny.question ? "block" : "none"}}>Question:{props.funny.question}</h1>
        <h1>Answer: {props.funny.answer}</h1>
    </div>   

    )
}

export default Joke 