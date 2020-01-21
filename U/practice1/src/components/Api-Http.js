import React from 'react'

class ApiHttp extends React.Component {

    constructor () {
        super();
        this.state = {
            character : {},
            loading : false
        }
    }

    componentDidMount = () => {
        this.setState({loading : true})
        console.log("hey !")
        // fetch promise api global function
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => { this.setState ({
                
                character : data,
                loading : false
            })
            console.log(data)    
            })
    }

    

    render () {
        let isLoading =  this.state.loading === true ? "Is Loading ..." : this.state.character.name

        return (
            <div>

                <h1>{isLoading}</h1>
            </div>
        )
    }

}
export default ApiHttp