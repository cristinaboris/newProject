import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeCart = (idProduct) => ({
  type: REMOVE_FROM_CART,
  payload: idProduct,
})