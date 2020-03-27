import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import data from "./data";

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...data
})

export default rootReducer