import counter from './counter'
import {combineReducers} from 'redux';
import userGen from './UsernameGen';
import date1 from './date';
import apicall from './api1';

const allReducers = combineReducers({
     ct: counter,
    username : userGen,
    date1 : date1,
    api1 : apicall,

})

export default allReducers