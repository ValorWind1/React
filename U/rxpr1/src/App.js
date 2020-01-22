import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {increment , decrement , usernamegen, deleteusernamegen, generateDate } from './actions';

 
function App() {

  const counter = useSelector(state => state.ct)
  const dispatch = useDispatch();
  const username = useSelector(state => state.username)
  const date = useSelector(state => state.date1)

 let style1 = {
    color : "red"

  }

  let style2 ={
    color : "blue"
  }

  let style3 = {
    color : "green",
    
  }

  let style4 = {
    color : "orange",
  }

  let style5 = {
    color : "purple",
  }
  
  return (
    
    <div className="App">
      <h1>This is a Counter App ! </h1>
      <h2>Our counter so far : {counter}</h2>
      <button onClick ={() => dispatch(decrement())} style ={style1}>Decrease ( - ) </button>
      <button  onClick ={() => dispatch(increment())} style = {style2}>Increase ( + ) </button>
      <h1>Other cool stuff</h1>
      <hr />
      <h2 style={style3}> Generate a random Username! </h2>
      <button onClick ={() => dispatch(usernamegen())}>* Generate Username *</button>
      <button onClick ={() => dispatch(deleteusernamegen())} style={style1}>Erase Username</button>
      <h1>Username Generated : {username}</h1>
      <br />
      <hr /> 
      <h1>Saga calling SideEffects </h1>
      <h2>Current Date is : {date} </h2>
      <button onClick={() => dispatch(generateDate())}>Get Current</button>
      <h3></h3>
      <hr />
      <h1>Using Saga to call APIs</h1>
      <h2 style={style4} > Pokemon APIs</h2>
      <h2 style = {style5}>Star Wars APIs</h2>



    </div>
  );
}

export default App;
