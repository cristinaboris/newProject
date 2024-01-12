import { applyMiddleware , createStore} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./root-reducer";
import rootSaga from './sagas'


const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];


const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store;