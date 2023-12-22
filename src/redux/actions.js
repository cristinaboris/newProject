import { ADD_TO_CART, DECREASED_QUANTITY, INCREASED_QUANTITY, REMOVE_FROM_CART } from './actionTypes';

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
  payload: itemId,
})

export const decreaseQuantity = (itemId) => ({
  type: DECREASED_QUANTITY,
  payload: itemId,
});