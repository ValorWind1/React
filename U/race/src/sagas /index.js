import {call, put , take , fork , cancel ,race, delay } from 'redux-saga/effects'


// export const delay = ms => new Promise(resolve => setTimeout(resolve,ms))

export const getPlus = () => Math.floor(Math.random() * 50)

let counter1 = 0 ;
let counter2 = 0 ; 

export function* tickV1 () {
    while(true){
        yield delay (1000);
        const pl = yield call (getPlus)
        counter1 += pl
        yield put ({
            type:'TICK_V1' , pl
       });
       if (counter1 >= 100) return true 
    }
}

export function* tickV2 () {
    while(true){
        yield delay(1000);
        const pl = yield call (getPlus)
        counter2 += pl
        yield put ({
            type:'TICK_V2' , pl
       });
       if (counter2 >= 100) return true 
    }
}

export function* watchRace() {
    while(true) {
        yield take ('START')
        const {v1,v2} = yield race ({
            v1:call(tickV1),
            v2:call(tickV2)
        })
        yield put ({type : 'STOP'})

        if(v1) {
            yield put ({type : 'V1_WIN'})

        }else {
            yield put({type : 'V2_WIN'})
        }

    }
}

export function* reset() {
    while(true) {
        yield take ('RESET')
        counter1 = 0
        counter2 = 0
    }
}

export default function* root(){
    // yield [
    //     fork(watchRace),
    //     fork(reset)
    // ]
    yield call(watchRace)
}

// export default function* rootSaga(){
//     yield takeEvery(ActionTypes.START, tickV1,tickV2  )
//     yield takeEvery(ActionTypes.DECREMENT_ASYNC, decrementAsync)
    
// }