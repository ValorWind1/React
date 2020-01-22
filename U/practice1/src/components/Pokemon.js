import React from 'react'; 

class Pokemon extends React.Component {
    constructor () {
        super ();
        this.state ={
            loading : false, 
            mons : {},
            moves : [],
            abilities : [],
            sprites : [],
            
        }
    }



    componentDidMount = () => {
        this.setState({loading : true})
        fetch("https://pokeapi.co/api/v2/pokemon/6")
        .then((response) => response.json())
        .then(data => { 
            this.setState ({
                mons : data,
                loading : false ,
                moves : [data],
                abilities : [data],
                sprites : [data]          
        })
        console.log(data); 
        console.log(data.moves)
        console.log(data.abilities)
        console.log("SPRITES TEST"+data.sprites.front_default)
    })
}
    

    render () {

        let loadedApi = this.state.loading ? "Loading !!!" : this.state.mons.name

        let abilities1 = this.state.abilities.abilities

        let test1 = this.state.abilities.map((i) => {
            return i.abilities[0].ability.name + " & " + i.abilities[1].ability.name
        })

        let sprites7 = this.state.sprites.map((i) => {
            return i.sprites.front_default 
        })

        console.log("Console Log TEST1"+ test1)

        console.log("abilities test" , this.state.abilities)
        
        let style = {
           color : "purple",
           padding : "5px"

         }
        
         let style1 = {
             color : "blue",
             textAlign : "center"
         }
        

        return (

            <div>
                    <h2>Gotta Cach Em all -- Pokemon!</h2>
                    <h2 style ={style}>{loadedApi}</h2>

                    <h2>
                        {this.state.moves.map((i) => {
                        return  (i.name)
                        
                    })}</h2>

                    <h2>{abilities1}</h2>

                    <h1 style={style1}>{test1}</h1>

                    <img src={sprites7} />

            </div>
        )
    }
}

export default Pokemon