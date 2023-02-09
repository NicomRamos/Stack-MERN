import { combineReducers } from "redux";
import { clientReducer } from "./clientReducer";
import { carReducer } from './carReducer'
import { repairReducer } from './repairReducer'

const rootReducer = combineReducers({
    clientReducer,
    carReducer,
    repairReducer
})

export default rootReducer