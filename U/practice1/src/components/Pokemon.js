import React from 'react'; 

class Pokemon extends React.Component {
    constructor () {
        super ();
        this.state ={
            loading : false, 
            mons : {},

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
            })
            
      })
    }



    render () {

        let loadedApi = this.state.loading ? "Loading !!!" : this.state.mons.name
        
        let style = {
           color : "purple",
           padding : "5px"
       }
        

        return (


            <div>
                <h2>Gotta Cach Em all -- Pokemon!</h2>
                    <h2 style ={style}>{loadedApi}</h2>

            </div>
        )
    }
}



export default Pokemon