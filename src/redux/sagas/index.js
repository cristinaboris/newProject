import {takeLatest,all,put,fork,call, takeEvery} from 'redux-saga/effects'
import * as types from '../actionTypes';
import {getItems} from '../api';
import { ADD_TO_CART } from '../actionTypes';

export function* onLoadRecipeAsync(){
    try{
const response = yield call(getItems)
   yield put({type: types.FETCH_ITEMS_SUCCESS, payload: response.data})

}catch(error){
 yield put({type: types.FETCH_ITEMS_FAIL})
    }
}

//export function* createCardItems(){
 //   yield put({ type: ADD_TO_CART, payload: action.payload });
//}
function* addToCartSaga(action) {

    yield put({ type: ADD_TO_CART, payload: action.payload });
}

function* handleIncrease(action){
    yield put({ type: types.INCREASED_QUANTITY, payload: action.payload })
}

function* handleDecrease(action){
    yield put({ type: 'DECREASED_QUANTITY', payload: action.payload });
}

export function* onLoadRecipe(){

    yield takeLatest(types.FETCH_ITEMS_START, onLoadRecipeAsync)
}

export function* watchAddToCart() {
    yield takeLatest(ADD_TO_CART, addToCartSaga);
    yield takeEvery(types.INCREASED_QUANTITY, handleIncrease);
    yield takeEvery(types.DECREASED_QUANTITY, handleDecrease)
  }

const recipeSaga = [fork(onLoadRecipe)]
const cardSaga = [fork(watchAddToCart)]

export default function* rootSaga(){
    yield all([...recipeSaga, cardSaga])
}