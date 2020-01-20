import {put } from 'redux-saga/effects'
import {delay}from 'redux-saga/effects'
import * as actions from '../actions/index'


// generators functions that can be executed
//incrementally 
export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
    // put dispatches  a new action 
}


export function* checkAuthTimeoutSaga(action){
    yield delay(action.expirationTime)
    yield put(actions.logout())   
}