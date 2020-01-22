import {takeEvery , put , delay , call} from 'redux-saga/effects'
import axios from 'axios'

function* showDateAync(){
    yield delay(4000)
    yield put ({type:'DATE_ASYNC'})
}

function* apiCall(){
    try {
        let i = yield call (axios.get,'https://swapi.co/api/people', apiCall )
        yield put({type: 'API_CALL_ASYNC'}) 
        console.log(i)
     }catch (error){
         console.log('FETCH ERROR FROM APICALL' , error.message)
     }
}


export function* watchDateAsync(){
    yield takeEvery('SHOW_DATE',showDateAync)
    yield takeEvery('API_CALL' , apiCall)
}