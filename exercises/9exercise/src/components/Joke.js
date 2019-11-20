import React from 'react';

function Joke (props) {
    return(

        <div className = "jokeSyle">
            <img src= {props.yoke.imgUrl}></img>
            <h5 style={{display: props.yoke.question ? "block" : "none"}}>Question : {props.yoke.question}</h5>
            <h5 style = {{color: !props.yoke.question && "#04756F"}}> Answer: {props.yoke.punchLine}</h5>
            <br />
            <hr />
        </div>

    );
}

export default Joke;