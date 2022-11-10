// import reducer from "./reducer";
// import {legacy_createStore,applyMiddleware} from "redux" 
// import thunk from "redux-thunk"

// export const store = legacy_createStore(reducer,applyMiddleware(thunk));

import {legacy_createStore,applyMiddleware,compose,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as CartReducer} from "./CartReducer/reducer"
import {reducer as SearchReducer} from "./SearchReducer/reducer"

const rootReducer = combineReducers({AppReducer,CartReducer,SearchReducer})

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk)))

export {store}