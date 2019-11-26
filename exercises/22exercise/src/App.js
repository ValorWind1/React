import React from 'react'

// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them2llla1b692bl


// render ( ) = is a lifecycle method its job determines what gets render into the screen
// in order words how the component is displayed to the world.

// componentDidMount ( )= another lifecycle methods that esentially is like saying u were born, it will
//only run once while the component is being displayed . useful for api calls 

//componentWillReceiveProps ( ) = lifecycle method that indicates that it will receive "gifts"
// it will run everytime a parent component decides to change props receives a parameter nextprops
// depricated ***** 

// shouldComponentUpdate ( ) = if there's a question if a components needs to rerender , it will 
// re render it automatically . so shouldComponentUpdate will give us developers the decision 
// wethere or not should the component update . // parameters nextProps , nextState
// return true if want update , return false if not 

// componentWillUnmount( ) = to do a clean up your code before component dissapears . *depricated*

class App extends React.Component {
  constructor (){
    super()
    this.state = {}
  }

  static getDerivedStateFromProps (props , state ) {
    // return the new , updated state based upon the props 
    // not recommended to use this method 

  }

  getSnapshotBeforeUpdate(){
    // allows use to createa  backup if the current things are .
  }

  componentDidMount(){


  }



shouldComponentUpdate(nextProps, nextState){

}

componentWillUnmount (){
  
}




  render() {
    return (

      <h1>Hi</h1>


    );
  }
}

export default App ; 