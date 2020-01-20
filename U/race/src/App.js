import React from 'react';
import Race from './components/Race'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {v1,v2,msg,status, ...actions} = this.props;
    return (
      <div>
        <Race v1={v1} v2={v2} msg={msg} status={status} actions={actions} />
      </div>
    )
  }
}


export default App;
