import React from 'react'

class ClassEx extends React.Component {
    constructor(){
        super()
        this.state = {}
    }
    render () {
        return (

            <div>
                <Headers2 username = "Daniel"/>
                <Greetings />
            </div>


        )
    }
}

class Headers2 extends React.Component {
    constructor(){
        super()
        // this.state = { username : "Daniel"}
    }
    render(){
        return (

            <header>
                <p>Welcome , {this.props.username}!</p>
            </header>
        )
    }
}

class Greetings extends React.Component {
    constructor(){
        super()
        this.state = { }
    }

    render(){
        const date = new Date ()
        const hours = date.getHours()
        let timeOfDay 

        if (hours < 12){
            timeOfDay = "morning"
        }else if (hours >=12 && hours < 12){
            timeOfDay = "afternoon"
        }else {
            timeOfDay = "Night"
        }
        return (
            <h1>
                Good {timeOfDay} I hope the best for you !
            </h1>

        )
    }
}


export default ClassEx
