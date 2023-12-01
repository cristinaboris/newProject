import * as types from './actionTypes'


const initialState = {
    items: [],
    card: [],
    loading: false,
    sortPrices: []
}

const itemsReducer = (state = initialState, action) => {
switch(action.type){
    case types.FETCH_ITEMS_START:
        return {
            ...state, 
            loading: true,
        }
        case types.FETCH_ITEMS_SUCCESS:
             return{
                ...state,
                loading: false,
                items: action.payload,
             }
        case types.FETCH_ITEMS_FAIL:
            return{
                ...state, 
                loading: false,
                
            }
        case types.ADD_TO_CART:
            return{
            ...state,
            card: [...state.card, action.payload]
            }   
        case types.REMOVE_FROM_CART:
            return{
            ...state,
            card: state.card.filter((item) => item.id !== action.payload)    
            }     
        
        case types.CLEAR_CART:
            return{
                ...state,
                card: []
            }
        case types.SORT_BY_PRICE:
            return{
            ...state,
            items: state.items.slice().sort((a,b)=> b.price - a.price)
            }
        case types.SORT_BY_RATING:
            return{
                ...state,
            items: state.items.slice().sort((a, b) => b.rating.rate - a.rating.rate),
            }
            
            default: return state;
}}

export default itemsReducer