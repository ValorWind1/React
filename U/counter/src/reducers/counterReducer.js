import * as ActionTypes from '../actions/actionTypes'

const initialState = { 
    counter : 0,
    list : []
}


const counterReducer = (state = initialState , actions) =>{
    switch(actions.type){
        case ActionTypes.INCREMENT:
            return {
                ...state,
                counter:state.counter +1
            }
        case ActionTypes.INCREMENT_IF_ODD:
            return {
                ...state,
                counter: (state.counter % 2 === 1) ? state.counter +1 : state.counter
            }
        case ActionTypes.DECREMENT : 
            return {
                ...state , 
                counter : state.counter - 1
            }
        case ActionTypes.SUCCESS_FETCH  :
           console.log(actions)
            return {
                ...state ,
                
            }
        case ActionTypes.POST_FETCH :
            return {
                ...state ,
            }
        case ActionTypes.PUT_FETCH :
            return {
                ...state ,
            }
        case ActionTypes.DELETE_FETCH :
            return {
                ...state ,

            }
        
        default:
            return state ; 
    }
}

export default counterReducer