import {reducer as SearchReducer} from "./SearchReducer/reducer";
import {reducer as Auth} from "./Auth/reducer"
import {legacy_createStore,applyMiddleware,combineReducers} from "redux" 
import thunk from "redux-thunk"


const rootReducer = combineReducers({SearchReducer,Auth})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));