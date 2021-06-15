import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

import products from './products.js';
import categories from './categories.js';
import cart from './cart.js'

const reducer = combineReducers({ products, categories, cart });

const store = configureStore({ reducer });

export default store;