import React from 'react';


function Product (props){

    return (

        <div>
            <h3 style = {{color:  "#00FFFF"}}>Name : {props.name}</h3>
            <h3 style = {{display : props.price ? "block" : "none"}}>Price : {props.price}</h3>
            <h3>Description: {props.description}</h3>
            
            <hr></hr>
        </div>


    );



}


export default Product ;