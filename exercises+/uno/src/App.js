import React from 'react'
import './index.css'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Joke from './components/Joke'
import data from './data/products'
import Products from './components/Product'
import Product from './components/Product'

function App (){
    const duty1 = "packed the bags"
    const duty2 = "drink water"
    //////////
    const tt = {
      fontSize : 30
    }
    //////////
    // const info = data.map( (i) => 
    //   <Products  key={i.id} name={i.name} price={i.price} description={i.description} />
    // )

    const info2 = data.map ( (i) => <Product key={i.id} data2={i}/>)

  return (
    

    <div>
      <input type ="checkbox" name="option 1" ></input> 
      <p className = "p1">Option 1 </p>
      <input type ="checkbox" name="option 2" ></input> 
      <p style = {tt}>Have you {duty1}  yet ? </p>
      <input type ="checkbox" name="option 3" ></input> 
      <p style = {{color: "#ff8c00"}}>Dont forget to {duty2}  </p>


      {

        /////////////
      }

      <Joke 
        funny = {{question:"Hello there",
        answer : "General Kenobi"}}
      />

      <Joke 
        funny = {{question:"Yes",
        answer:"Yes"}}
      />

      <Joke 
        funny = {{question:"How are u",
        answer:"No"}}
      />

      <Joke 
        funny = {{
        answer:"You are a old one "}}
      />

      {

        /////////////
      }

      {/* {info} */}
      {info2}

      {
        ////////////
      }

    </div>

  
    
  )

}


export default App ;