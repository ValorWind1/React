import React from 'react'

const Joke = (props) => {
    return (
        <div>

          <h2>
            Question : {props.question} - Answer : {props.asnwer}

            </h2>
           
            
        </div>
    )
}


export default Joke