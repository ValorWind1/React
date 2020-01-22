import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';



//STORE = GLOBALIZED STATE  , (Holds all data for our APP)
    // 1- we create by import createStore from redux 
// let store = createStore(reducer)

//ACTION = DESCRIBES WHAT U WANT TO DO
        // function that returns an object 
const increment = () => {
    return {
        type : 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type : 'DECREMENT'
    }
}

//REDUCER = DESCRIBES HOW UR ACTIONS TRASNFORM THE STATE INTO THE NEXT STATE .
        // an action is called the reducer will check what action u did
        // based on the action it will modified the store 
        // another function . 
const  counter =(state = 0 , action) => {
    switch(action.type){
        case "INCREMENT" :
            return state + 1 ;
        case "DECREMENT" : 
            return state -1; 
    }

}

let store = createStore(counter) ; 

//DISPLAY IT IN THE CONSOLE
store.subscribe(() => console.log(store.getState()));

// DISPATCH = EXECUTE THE ACTION 
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
