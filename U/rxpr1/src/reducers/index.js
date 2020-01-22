import counter from './counter'
import {combineReducers} from 'redux';
import userGen from './UsernameGen';
import date1 from './date'

const allReducers = combineReducers({
     ct: counter,
    username : userGen,
    date1 : date1

})

export default allReducers