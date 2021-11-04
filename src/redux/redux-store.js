import {combineReducers, createStore, compose} from "redux";
import parentReducer from "./parentReducer";

const reducers = combineReducers({
    parent: parentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

window.store = store;

export default store;