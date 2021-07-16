import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import carts from './cart/reducer'

const store = createStore(combineReducers({
    carts,
}), composeWithDevTools());

export default store