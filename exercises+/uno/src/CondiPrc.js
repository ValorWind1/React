import React from 'react'

class CondiPrc extends React.Component{
    constructor(){
        super()
        this.state = { 

            isLogged : false
        }
        this.Changes = this.Changes.bind(this)
    }

    Changes(){
        this.setState((i) => {
            return {
                isLogged : !i.isLogged
            }
        })
    }

    render(){
        let texti = this.state.isLogged ? "Log out" : "Log In"
        const texo = this.state.isLogged ? "Log in ? " : "Log out"
        return(
            <div>
                <button onClick={this.Changes}>{texti}</button>
                <h1>{texo}</h1>

            </div>
        )
    }
}

export default CondiPrc