import React from 'react';
import './index.css';

function App() {
  
    // const firstName = "Bob"
    // const lastName = "Ziroll"

    const date = new Date(2018,6,31,15);
    const hours = date.getHours();
    let timeOfDay
    const styles = {fontSize: 30 }

    if (hours < 12 ){
      timeOfDay = "morning"
      styles.color = "#04756F"
    }else if (hours >= 12 && hours < 17){
      timeOfDay = "afternoon"
      styles.color = "#8914A3"
    }else {
      timeOfDay ="night"
      styles.color = "#D90000"
    }

    // const styles = {color: "#FF8C00" , 
    // backgroundColor : "#FF2D00",
    // fontSize: 24 }
    // w.e js we want to be interpreted in jsx should be surrounded with curly braces
    return (
    // <h1>Hello {firstName + " " + lastName }! </h1>
      
    // we converted to ie6 sintax is this = 
    // <h1>Hello {`${firstName} ${lastName}`}! </h1>
    
    <div>
      
      <h1>It is currently about {date.getHours() % 12 } o'clock</h1>
      {/* we have to wrap our inline style with 2 curl4y brackets ! */}
      {/* when there's a style with a  - remove the - and do a camelCase */}
      <h1 style= {styles}>Good {timeOfDay} !</h1> 
    </div>


  );
}

export default App;
