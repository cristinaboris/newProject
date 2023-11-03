import {takeLatest,all,put,fork,call} from 'redux-saga/effects'
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
    // Можно добавить здесь логику для обработки добавления товара в корзину
    // Например, отправка запроса на сервер, обновление данных и т.д.
  
    // В данном примере, просто отправляем действие, чтобы обновить состояние корзины
    yield put({ type: ADD_TO_CART, payload: action.payload });
  }

export function* onLoadRecipe(){

    yield takeLatest(types.FETCH_ITEMS_START, onLoadRecipeAsync)
}

export function* watchAddToCart() {
    yield takeLatest(ADD_TO_CART, addToCartSaga);
  }

const recipeSaga = [fork(onLoadRecipe)]
const cardSaga = [fork(watchAddToCart)]

export default function* rootSaga(){
    yield all([...recipeSaga, cardSaga])
}