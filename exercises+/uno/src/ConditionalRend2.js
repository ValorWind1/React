import React from 'react'


class ConditialRend2 extends React.Component{
    constructor(){
        super()
        this.state = {
            unreadMessages : [
                "Call Mom" , "Call GranPas"
            ]
        }
    }
    // conditional rendering usign && ! 
    render(){
        return(
            <div>
               {this.state.unreadMessages.length > 0 && <h2>You have : {this.state.unreadMessages.length} missed messages!</h2> }
            </div>
        )
    }
}



export default ConditialRend2