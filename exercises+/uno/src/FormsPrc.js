import React from 'react'

class FormsPrc extends React.Component{
    constructor(){
        super()
        this.state = {
            firstname : "",
            lastname : "",
            age : "",
            vegetarian : false,

        }
        this.ChangeBruh = this.ChangeBruh.bind(this)
    }

    ChangeBruh (event){
        const {name,value,type, checked} = event.target
        type === "checkbox" ? this.setState ({[name] : checked}) : 
        this.setState({

            [name] : value
        })
    }
    render(){
        return(
            <main>
                <forms>
                    <input 
                    placeholder="First Name"
                    type ="text"
                    name ="firstname"
                    value={this.state.firstname}
                    onChange={this.ChangeBruh} 
                    
                    /><br />
                    <input 
                    placeholder="Last Name" 
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.ChangeBruh}
                    type="text"
                    /><br />
                    <input 
                    placeholder="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.ChangeBruh} 
                    type ="number"
                    /><br />

                    <input 
                    type = "checkbox"
                    name="vegetarian"
                    checked={this.state.vegetarian}
                    onChange={this.ChangeBruh}


                    />Vegetarian ? <br />


                    <h4>First Name : {this.state.firstname}</h4>
                    <h4>Last Name : {this.state.lastname}</h4>
                    <h4>Age : {this.state.age}</h4>
                    <h4>Vegetarian : {this.state.vegetarian ? "Yes" : "No"}</h4>

                </forms>
            </main>
        )
    }
}

export default FormsPrc