import * as ActionTypes from './actionTypes';

export const inc = () => {
    return {
        type: ActionTypes.INCREMENT
    }
}

export const incIfOdd = () => {
    return{
        type:ActionTypes.INCREMENT_IF_ODD
    }
}

export const dec = () => {
    return{
        type:ActionTypes.DECREMENT
    }
}

export const addF = () => {
    return {
        type:ActionTypes.SUCCESS_FETCH
    }
}