import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as ActionTypes from '../actions/actionTypes'

class Race extends Component {
   
    state = {
        status :'Stopped',
        v1 : 0 ,
        v2 : 0
    }

    render () {
        return (
            <div>
                <h1>LET THE RACE BEGIN !</h1>

                <h1>{this.props.counter} </h1>

                <button onClick={this.props.onStart}>Start</button>
                <button onClick={this.props.onReset}>Restart</button>
                

                <h1>{this.props.v1}</h1>
                <h1>{this.props.v2}</h1>

               

                



            </div>
        );
    }
}

const mapStateToProps = (state , ownProps) => {
    return {
        status : state.status,
        v1: state.v1 , 
        v2 : state.v2,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStart : () => dispatch({type: ActionTypes.START}),
        onStop : () => dispatch({type: ActionTypes.STOP}),
        onReset : () => dispatch({type: ActionTypes.RESET}),
        // onTick_v1 : () => dispatch({type: ActionTypes.TICK_V1}),
        // onTick_v2 : () => dispatch({type: ActionTypes.TICK_V2}),
        // onV1_win : () => dispatch({type: ActionTypes.V1_WIN}),
        // onV2_win : () => dispatch({type: ActionTypes.V2_WIN})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Race)
