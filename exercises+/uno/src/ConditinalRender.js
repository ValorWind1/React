import React from 'react'
import Condi from './components/Condi'

class ConditialRender extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoading : true
        }
    }

    componentDidMount(){
        setTimeout((i) => {
            this.setState({
                isLoading : false
            })
        },1500)
    }

    render(){
        return(
            <div>
                {this.state.isLoading === true ? <h1>Hello there</h1> : 
                <Condi  />}
            </div>
        )
    }
}


export default ConditialRender