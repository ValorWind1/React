import React from 'react'

const Product = (props) => {
    return (
        <div>
            <h2>List : {props.name}  Description :{props.description}</h2>
        </div>
    )
}

export default Product 