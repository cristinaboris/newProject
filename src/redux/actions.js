import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";
import { INCREASED_QUANTITY } from "./actionTypes";
import { DECREASED_QUANTITY } from "./actionTypes";
import {FETCH_ITEMS_SUCCESS} from './actionTypes'

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeCart = (idProduct) => ({
  type: REMOVE_FROM_CART,
  payload: idProduct,
})


export const quanityCart = (itemId) => ({
  type: INCREASED_QUANTITY,
  payload:  itemId ,
})

export const decreaseQuantity = (itemId) => ({
  type: DECREASED_QUANTITY,
  payload: itemId,
});

export const itemsMain = (items) => ({
type: FETCH_ITEMS_SUCCESS,
payload: items
})