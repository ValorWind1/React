import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import MyInfo from "./MyInfo";
import Test1 from "./index1";

// ReactDOM.render(WHAT DO I WANT TO RENDER , WHERE DO I WANT TO RENDER IT )


// JSX = like html with few differeneces.
// Cant render 2 JSX element with one another.  so you have to wrapp them in a div tag or something 
ReactDOM.render(<App />, document.getElementById('root'));

// function MyApp(){
//     return (
//     <ul>
//         <li>beef</li> 
//         <li>fish</li> 
//         <li>pig</li>
//     </ul>
//     )
// } 

// exercise 1 for course : 
// ReactDOM.render(<ul><li>beef</li> <li>fish</li> <li>pig</li></ul>, document.getElementById('root'));


// exercise 2 from course 
// ReactDOM.render(<MyApp />, document.getElementById('root'));

// exercise 3 
// ReactDOM.render(<index1/>,document.getElementById('root'));


