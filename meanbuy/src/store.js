
import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';

import thunk from 'redux-thunk'

import {productReducer} from './Redux/Products.Redux/product.reducer.js';
import {ProductPgReducer} from './Redux/ProductPg.Redux/Items.reducer.js';
import {CartReducer} from './Redux/Cart.Redux/cart.reducer.js';
import {UserReducer} from './Redux/Uer.Redux/Userreducer.js';
import {orederReducer} from './Redux/Order.redux/order.reducer.js';


const rootReducer = combineReducers({
   productManager:productReducer,
   ItemsManager:ProductPgReducer,
   cartManager:CartReducer,
   userManager:UserReducer,
   orderManager:orederReducer
});

const composer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = legacy_createStore(rootReducer,composer(applyMiddleware(thunk)))