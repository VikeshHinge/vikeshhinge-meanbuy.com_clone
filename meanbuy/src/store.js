
import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import {productReducer} from './Redux/Products.Redux/product.reducer.js';
import {ProductPgReducer} from './Redux/ProductPg.Redux/Items.reducer.js';
import {cartReducer} from './Redux/Cart.Redux/cart.reducer.js'

const rootReducer = combineReducers({
   productManager:productReducer,
   ItemsManager:ProductPgReducer,
   cartManager:cartReducer
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))