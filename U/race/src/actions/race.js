import * as actionTypes from './actionTypes';

export const start = () =>{
    return {
        type : actionTypes.START
    }
}

export const  reset= () => {
    return {
        type : actionTypes.RESET

    }
};

export const  tick_v1= () => {
    return {
        type : actionTypes.TICK_V1

    }
};

export const  tick_v2= () => {
    return {
        type : actionTypes.TICK_V2

    }
};

export const v1_win= () => {
    return {
        type : actionTypes.V1_WIN

    }
};

export const v2_win= () => {
    return {
        type : actionTypes.V2_WIN
    }
};