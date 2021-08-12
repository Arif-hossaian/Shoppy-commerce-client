import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
