const apicall = (state = " ", action) => {
    switch (action.type){
        case 'API_CALL_ASYNC':
            return  [...state]
         default :
        return state
    }
}

export default apicall