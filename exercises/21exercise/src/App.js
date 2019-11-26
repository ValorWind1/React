import React from 'react'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      half : 900000000000000000090000000

    }
    this.HalfThis = this.HalfThis.bind(this);
  }

  HalfThis(){
    this.setState(i => {
      return {
        half : i.half / 2 
      }
    })
  }

  render(){
    return(
      <div>
        <h1>Number : {this.state.half}</h1>
        <img src = "https://images.squarespace-cdn.com/content/v1/55198512e4b06fca171a2ec4/1489841226592-U1FERLSALRT2NN5SCZ1M/ke17ZwdGBToddI8pDm48kLRIQm3roQ3RckDH1a-wrg9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpznHDGhJTWgCxQjVUwfyBCtf6jkatPqmge29lwIFcxedWZESU0eA6I0H7Y1oiD0lK0/image-asset.jpeg" onClick = {this.HalfThis}/>
      </div>

    );
  }
}




export default App ; 