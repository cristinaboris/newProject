import {takeLatest,all,put,fork,call} from 'redux-saga/effects'
import * as types from '../actionTypes';
import {getItems} from '../api';

export function* onLoadRecipeAsync(){
    
    try{
const response = yield call(getItems)
   yield put({type: types.FETCH_ITEMS_SUCCESS, payload: response.data})

}catch(error){
 yield put({type: types.FETCH_ITEMS_FAIL})
    }
}

export function* onLoadRecipe(){

    yield takeLatest(types.FETCH_ITEMS_START, onLoadRecipeAsync)
}


const recipeSaga = [fork(onLoadRecipe)]

export default function* rootSaga(){
    yield all([...recipeSaga])
}