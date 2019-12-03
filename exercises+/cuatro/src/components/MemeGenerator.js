import React from 'react'


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {

            toptext:"",
            bottomtext:"",
            randomimage:"http://i.imgflip.com/1bij.jpg",
            allmemes : []
        }
        this.Changeee = this.Changeee.bind(this)
        this.genx = this.genx.bind(this)
    }

    componentDidMount(){
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        console.log(memes[0])
        this.setState ({allmemes : memes})
    })
    }

    Changeee(event){
        const{name,value} = event.target
        this.setState({[name] : value})

    }
  
    genx(event){
        event.preventDefault()
        // get a random int from and array , 
        // get the meme from that index 
        const randoom = Math.floor(Math.random() * this.state.allmemes.length)
        const randmeme = this.state.allmemes[randoom].url
        this.setState({ randomimage : randmeme})
    }


    render(){
        return(

            <div>   

                <form onSubmit ={this.genx}>

                    <input
                    type = "text"
                    placeholder = "something"
                    value = {this.state.toptext}
                    onChange = {this.Changeee}
                    name = "toptext"
                    /> 
                    <input
                    type = "text"
                    placeholder = "more someething"
                    value = {this.state.bottomtext}
                    onChange = {this.Changeee}
                    name = "bottomtext"

                    /> 
                    <button onSubmit ={this.genx}>Generate</button>
                    

                </form>

                <div>
                <img src = {this.state.randomimage} ></img>
                     <h1>{this.state.toptext}</h1>
                    <h1>{this.state.bottomtext}</h1>
                </div>

            </div>
        )
    }
}






export default MemeGenerator