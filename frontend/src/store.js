import {createStore,combineReducers, compose, applyMiddleware} from 'redux';
import{productListReducer} from './reducers/productReducers';
import thunk from 'redux-thunk'
const initialState={};
const reducer = combineReducers({
    productList:productListReducer,
})
const Store = createStore(reducer,initialState,compose(applyMiddleware(thunk)));
export default Store;