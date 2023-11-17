import { ADD_TO_CART } from "./actionTypes";
import { REMOVE_FROM_CART } from "./actionTypes";
import { SORT_BY_RATING, SORT_BY_PRICE } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeCart = (idProduct) => ({
  type: REMOVE_FROM_CART,
  payload: idProduct,
})

export const sortPrice = () => ({
  type: SORT_BY_PRICE,
})

export const sortRating = () =>({
  type: SORT_BY_RATING,
})