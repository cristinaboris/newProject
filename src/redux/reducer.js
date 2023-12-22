import * as types from './actionTypes'

const initialState = {
  items: [],
  card: [],
  loading: false,
  sortPrices: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ITEMS_START:
      return {
        ...state,
        loading: true,
      }
    case types.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      }
    case types.FETCH_ITEMS_FAIL:
      return {
        ...state,
        loading: false,

      }
    case types.ADD_TO_CART:
      return {
        ...state,
        card: [...state.card, { ...action.payload, quantity: 1 }]
      }
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload)
      }

    case types.CLEAR_CART:
      return {
        ...state,
        card: []
      }

    case types.INCREASED_QUANTITY:
      return {
        ...state,
        card: state.card.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
      }
    case types.DECREASED_QUANTITY:
      return {
        ...state,
        card: state.card.map(item => item.id === action.payload ? {
          ...item,
          quantity: Math.max(1, item.quantity - 1)
        } : item)
      }
    case  types.UPDATE_CART_INFO_SUCCESS:
      return {
        ...state,
        totalQuantity: action.payload.totalQuantity,
        totalPrice: action.payload.totalPrice,
      }
    default:
      return state;
  }
}

export default itemsReducer