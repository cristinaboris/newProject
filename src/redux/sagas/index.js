import {takeLatest,all,put,fork,call, takeEvery, select} from 'redux-saga/effects'
import * as types from '../actionTypes';
import {getItems} from '../api';
import { ADD_TO_CART, INCREASED_QUANTITY, DECREASED_QUANTITY, UPDATE_CART_INFO_SUCCESS } from '../actionTypes';

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
    yield put({ type: UPDATE_CART_INFO_SUCCESS})
}

function* handleIncrease(action){
    yield put({ type: types.INCREASED_QUANTITY, payload: action.payload })
    yield put({ type: UPDATE_CART_INFO_SUCCESS})
}

function* handleDecrease(action){
    yield put({ type: DECREASED_QUANTITY, payload: action.payload });
    yield put({ type: UPDATE_CART_INFO_SUCCESS})
}

function* updateCartInfo(){
    const items = yield select(state => state.data.card )
    const totalQuantity = items.reduce((total, item) => total + item.quantity,0);
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

yield put({
    type: types.UPDATE_CART_INFO_SUCCESS,
    payload: { totalQuantity, totalPrice},
})
}

export function* onLoadRecipe(){

    yield takeLatest(types.FETCH_ITEMS_START, onLoadRecipeAsync)
}

export function* watchAddToCart() {
    yield takeLatest(ADD_TO_CART, addToCartSaga);
    yield takeEvery(INCREASED_QUANTITY, handleIncrease);
    yield takeEvery(DECREASED_QUANTITY, handleDecrease)
    yield takeEvery(UPDATE_CART_INFO_SUCCESS, updateCartInfo)
}

const recipeSaga = [fork(onLoadRecipe)]
const cardSaga = [fork(watchAddToCart)]

export default function* rootSaga(){
    yield all([...recipeSaga, cardSaga])
}