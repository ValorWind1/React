const initState = {
    status :'Stopped',
    v1 : 0 ,
    v2 : 0
}

export default function race(state = initState, action) {
    switch(action.type) {
        case 'START':
            return {
                ...state,
                status : 'Running'
            }

        case 'STOP' :
            return {
                ...state,
                status : 'Stopped'
            }
        case 'RESET':
            return initState
        
        case 'TICK_V1':
            return {
                ...state,
                v1 : state.v1 + action.plus
            }
        
        case 'TICK_V2':
            return {
                ...state,
                v2 : state.v2 + action.plus
            }
        
        case 'V1_WIN':
            return {
                ...state,
                msg : 'V1 WON'
            }
        case 'V2_WIN':
            return {
                ...state,
                msg : 'V2 WON'
            }

        default :
        return state 

    }
}

