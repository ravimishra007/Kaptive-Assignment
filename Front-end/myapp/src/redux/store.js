import  {applyMiddleware, combineReducers, legacy_createStore}  from 'redux'
import { authReducer } from './reducer'
import {thunk} from "redux-thunk"
const rootReducer=combineReducers({
    auth:authReducer
})
 export const store=legacy_createStore(rootReducer,applyMiddleware(thunk) )