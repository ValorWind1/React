import React from 'react'
import './index.css'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Joke from './components/Joke'
import data from './data/products'
import Product from './components/Product'
import Todoo from './components/Todoo'
import todoData from './data/todo'
import ClassEx from './ClassEx'
import ExState from './ExState'
import StateP from './StateP'
import ChanginState from './ChanginState'
import Phase6 from './Phase6'
import ConditialRender from './ConditinalRender'
import ConditialRend2 from './ConditionalRend2'
import CondiPrc from './CondiPrc'
import FormsPrc from './FormsPrc'

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

    const hacer = todoData.map((i) => 
      <Todoo key={i.id} hacer={i}  />
    )

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

      {hacer}

      {
        //////////
      }

      <ClassEx/>

      {

        ///////
      }
      <ExState /> 


      <StateP />

      {
        ////////
      }

      <ChanginState />


      {
        //////
      }
      
      <hr></hr>

      <Phase6 />

      {

        ///////
      }

      {

        //////
      }
      

    <hr>
    </hr>

    <ConditialRender />


    {
      //////
    }

    <ConditialRend2 />

    {

      ////////
    }
    <hr></hr>

    <CondiPrc />

    {
      ///////
    }

      <hr></hr>
    <FormsPrc />


    

    </div>

  
    
  )

}


export default App ;