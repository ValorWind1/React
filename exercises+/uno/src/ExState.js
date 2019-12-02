import React from 'react'


class ExState extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "Daniel",
            age: "100"
         }
    }
    render(){
        return (
        <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        </div>
        )
    }
}


export default ExState