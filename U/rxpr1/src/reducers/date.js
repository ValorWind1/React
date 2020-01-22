const date1 = (state = " " , action)  => {
    switch (action.type) {
        case 'DATE_ASYNC':
            return state + new Date();
        
        default :
        return state ; 
    }
}

export default date1; 