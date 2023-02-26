
import {createStore,applyMiddleware , combineReducers} from "redux"
import {authReducer } from "./reducers/authReducer"
import{foodReducer} from "./reducers/foodReducer"
import thunk from "redux-thunk"
const rootReducer= combineReducers({
     authReducer ,
     foodReducer , 
})

export const store=createStore(rootReducer,applyMiddleware(thunk))
