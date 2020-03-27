import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import { routerMiddleware } from "connected-react-router";
import rootReducer from "../reducers";
import middlewares from "../middlewares";

const configureStore = (history) => {
    const store = createStore(
        rootReducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                ...middlewares
            )
        )
    )

    return store
}

export default configureStore