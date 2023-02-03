import { combineReducers } from "redux";
import  {clientReducer}  from "./clientReducer";
import  {carReducer}  from './carReducer'

const rootReducer = combineReducers({
    clientReducer,
    carReducer
})

export default rootReducer