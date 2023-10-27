import { combineReducers } from "redux";
import itemsReducer from "./reducer";

const rootReducer = combineReducers({
data: itemsReducer,

})

export default rootReducer