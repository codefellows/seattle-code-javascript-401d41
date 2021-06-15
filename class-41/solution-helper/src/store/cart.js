import superagent from 'superagent';

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], customer: {}, paymentInfo: {} },
  reducers: {
    add(state, action) {
      state.items = state.items.filter(product => product.name !== action.payload.name);
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(product => product._id !== action.payload._id);
    },
    updateCustomer(state, action) {
      state.customer = action.payload;
    },
    updatePaymentInfo(state, action) {
      state.paymentInfo = action.payload;
    }
  }
})

export const addToCart = (product) => async dispatch => {
  let updatedProduct = { inStock: product.inStock - 1 };
  let url = `${process.env.REACT_APP_API}/products/${product._id}`;
  let results = await superagent.put(url).send(updatedProduct);
  let record = results.body;
  dispatch(add(record));
};

export const removeFromCart = (product) => async dispatch => {
  let updatedProduct = { inStock: product.inStock + 1 };
  let url = `${process.env.REACT_APP_API}/products/${product._id}`;
  let results = await superagent.put(url).send(updatedProduct);
  let record = results.body;
  dispatch(remove(record));
};

// Not publishing this internal action, only the thunk'd one above
const { add, remove } = cartSlice.actions

export default cartSlice.reducer
