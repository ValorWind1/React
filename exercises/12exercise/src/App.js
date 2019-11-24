import React from 'react';

// function App () {

// return (

// <h1>Hello World ! </h1>


//   );
// }

class App  extends React.Component {

 yourMethodHere () {
  // if we need our own methods we put em here inside the class above render 
 }

  render() {
    const style = this.yourMethodHere()  // this is how we would call it 
    const date = new Date(); // ex of another method 
    return (
      <div>
        <h1>{this.props.whatever}</h1>   
         {/* this is how we would passs props by using the this keyword */}
      </div>
      
      
        );
      }
  }

// when in a class based components when using props we need to use this. 


export default App;