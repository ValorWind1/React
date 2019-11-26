import React from 'react';



function handleClick(){
  console.log("I was Clicked")
}

function hoverpicture(){
  console.log("I'm hovering over the picture")
}

// https://reactjs.org/docs/events.html#supported-events

function App (){  
  return (

    <div>
      <img onMouseEnter ={hoverpicture}
      src="https://3.bp.blogspot.com/-zWQLzKYAP2U/Wo-3wNICgXI/AAAAAAAADN8/Gp2lPB_dXMMF-QOpH1lwwWfsoj1ZARJKQCLcBGAs/s1600/Wings%2Bof%2BFreedom%2BWallpaper%2BEngine.jpg" />
      <br />
      <br />
      {/* // anonymous function below  */}
      {/* <button onClick={() => {console.log}}>Click Me</button>    */}

      <button onClick={handleClick}>Click Me</button>  
      {/* caling the function  */}
    </div>
  );
}





export default App ; 