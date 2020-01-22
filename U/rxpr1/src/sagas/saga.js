import {takeEvery , put , delay} from 'redux-saga/effects'

function* showDateAync(){
    yield delay(4000)
    yield put ({type:'DATE_ASYNC'})
}

function* apiCall(){
    yield 
}


export function* watchDateAsync(){
    yield takeEvery('SHOW_DATE',showDateAync)
}