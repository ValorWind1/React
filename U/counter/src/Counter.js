import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as ActionTypes from './actions/actionTypes'

class Counter extends Component {
    state = {
        counter: 0,
        list : []
    }

    render () {
        return (
            <div>
                <p>
                    You Have clicled # : 
                </p>
                <h1>{this.props.counter} </h1>

                <button onClick={this.props.onIncrementCounter}>+</button>
                <button onClick={this.props.onDecrementCounter}>-</button>
                <button onClick={this.props.onIncrementIfOdd}>Increment if Odd</button>
                <button onClick={this.props.onIncrementAsync}>Increment Async</button>
                <button onClick={this.props.onDecrementAsync}>Decrement Async</button>
                <button onClick={this.props.onSuccessAsync}> Fetch data</button>
                <button onClick={this.props.onPostAsync}> Post data</button>

                <h1>{this.props.list}</h1>

                <input type = "text" placeholder="type something" />
                <input placeholder="type content" />
                <button onClick={this.props.onPostAsync}>POST</button>

                



            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter,
        list : state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter : () => dispatch({type: ActionTypes.INCREMENT}),
        onDecrementCounter : () => dispatch({type: ActionTypes.DECREMENT}),
        onIncrementIfOdd : () => dispatch({type: ActionTypes.INCREMENT_IF_ODD}),
        onIncrementAsync : () => dispatch({type:'INCREMENT_ASYNC'}),
        onDecrementAsync : () => dispatch({type:'DECREMENT_ASYNC'}),
        onSuccessAsync : () => dispatch({type: 'SUCCESS_FETCH'}),
        onDeleteAsync : () => dispatch({type : 'DELETE_FETCH'}),
        onPostAsync : () => dispatch({type : 'POST_FETCH'})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
