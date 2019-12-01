import React from 'react'

function Products (props){
    console.log(props)
    return (
    <div>
        
        {/* <h5>name:{props.name}</h5>
        <h5>price:{props.price}</h5>
        <h5>description:{props.description}</h5> */}

        <h5>{props.data2.name}</h5>
        <h5>{props.data2.price}</h5>
        <h5>{props.data2.description}</h5>
    </div>
    )
}

export default Products