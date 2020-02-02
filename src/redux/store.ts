import { createStore, applyMiddleware, compose, Store } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./rootReducer";

const composeEnhancers = (typeof window != "undefined" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) || compose;
export const makeStore = (initialState): Store => {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)));
};
