import {put , takeEvery , delay ,call } from 'redux-saga/effects'
import * as ActionTypes from '../actions/actionTypes'
import axios from 'axios'


export function*incrementAsync() {
    // console.log("INCREMENT works")
    yield delay (1000)
    yield put({type:'INCREMENT'})
}

export function*decrementAsync(){
    yield delay(1000)
    yield put({type:'DECREMENT'})
}

export function*getRequest(){
    try {

    let i = yield call (axios.get,'http://reduxblog.herokuapp.com/api/posts?key=edgar1234', getRequest )
    yield put({type: 'SUCCESS_FETCH'}) 
    console.log(i)
 }catch (error){
     console.log('fetch error' , error.message)
 }
}

export function*postRequest(){
    try {

    let i = yield call (axios.post,'http://reduxblog.herokuapp.com/api/posts?key=edgar1234' , { title : "" , categories : "" , content : "21311"

    }, postRequest )
    yield put({type: 'POST_FETCH'}) 
    console.log(i)
 }catch (error){
     console.log('fetch error' , error.message)
 }
}

export function*deleteRequest(id){
    try {
   const i = yield axios.delete('http://reduxblog.herokuapp.com/api/posts?key=edgar1234/' + id , deleteRequest)
    console.log(i)
 }catch (error){
     console.log('fetch error' , error.message)
 }
}

export function*putRequest(){
    try {

    let i = yield call (axios.put,'http://reduxblog.herokuapp.com/api/posts?key=edgar1234' ,  putRequest )
    yield put({type: 'PUT_FETCH'}) 
    console.log(i)
 }catch (error){
     console.log('fetch error' , error.message)
 }
}


export default function* rootSaga(){
    yield takeEvery(ActionTypes.INCREMENT_ASYNC ,incrementAsync )
    yield takeEvery(ActionTypes.DECREMENT_ASYNC, decrementAsync)
    yield takeEvery(ActionTypes.SUCCESS_FETCH, getRequest)
    yield takeEvery(ActionTypes.POST_FETCH, getRequest)
    yield takeEvery(ActionTypes.DELETE_FETCH, deleteRequest)
    yield takeEvery(ActionTypes.PUT_FETCH, deleteRequest)
}



