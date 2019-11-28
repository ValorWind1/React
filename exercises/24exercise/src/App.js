import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      unreadMessages : [

        "Call your mon !",
        "New spam email available. All links are definteley saef to click"

      ]

    }
  }
  // && 
  // true && false 
  // 
  render(){
    return(

      // <div>
      //     {
      //       this.state.unreadMessages.length > 0 && 
      //       <h2>You Have : {this.state.unreadMessages.length} unread messages! </h2>
      //     }
      // </div>

      // or use ? : 
      <div>
          {
            this.state.unreadMessages.length > 0 ?
            <h2>You Have : {this.state.unreadMessages.length} unread messages! </h2> : 
            null
          }
      </div>

    );
  }
}

export default App ;