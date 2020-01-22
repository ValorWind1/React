
const userGen = (state = " ", action) => {
    switch (action.type){
        case 'GENERATE' :
            return state + Math.random().toString(36).substring(6);
        case 'DELETE':
            return state;
   
            default :
        return state;


    }
}

export default userGen ; 