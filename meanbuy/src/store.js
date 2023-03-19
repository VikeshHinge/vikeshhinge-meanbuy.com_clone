
import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import {productReducer} from './Redux/Products.Redux/product.reducer.js';

const rootReducer = combineReducers({
   productManager:productReducer
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))