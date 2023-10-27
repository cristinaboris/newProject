import * as types from './actionTypes'


const initialState = {
    items: [],
     
    loading: false,
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
            default: return state;
}}

export default itemsReducer