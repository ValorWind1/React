import React from 'react'

function ProductComponent(props){

return(
    <div>
        <h1>Item name : {props.name}</h1>
        <h2>Description : {props.description}</h2>
        <hr></hr>
    </div>
    );

}


export default ProductComponent;