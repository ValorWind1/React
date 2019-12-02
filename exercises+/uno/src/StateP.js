import React from 'react'

class StateP extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoggedIn : false,
        }
    }

    render(){
        const displayWord =
        (this.state.isLogged ? "IN" : "OUT")



        return(
            
        <h1>You are : {displayWord}</h1>



        )
    }
}


export default StateP