import React from 'react'
import './index.css'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App (){
    const duty1 = "packed the bags"
    const duty2 = "drink water"


    const tt = {
      fontSize : 30
    }
    
  return (
    

    <div>
      <input type ="checkbox" name="option 1" ></input> 
      <p className = "p1">Option 1 </p>
      <input type ="checkbox" name="option 2" ></input> 
      <p style = {tt}>Have you {duty1}  yet ? </p>
      <input type ="checkbox" name="option 3" ></input> 
      <p style = {{color: "#ff8c00"}}>Dont forget to {duty2}  </p>

    </div>
    
  )

}


export default App ;