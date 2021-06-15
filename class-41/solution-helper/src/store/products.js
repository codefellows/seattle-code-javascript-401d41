import superagent from 'superagent';

import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'products',
  initialState: { productList: [], activeProduct: {} },
  reducers: {
    add(state, action) {
      return state.map(product => product.name === action.payload.name ? action.payload : product);
    },
    setProductList(state, action) {
      state.productList = action.payload;
    },
    setActiveProduct(state, action) {
      state.activeProduct = action.payload;
    }
  }
})

export const getProducts = (category) => async dispatch => {
  let response = await superagent.get(`${process.env.REACT_APP_API}/products`);
  let records = response.body.results || [];
  let products = records.filter(product => product.category === category && product.inStock > 0);
  dispatch(setProductList(products));
};

export const getProduct = (id) => async dispatch => {
  let response = await superagent.get(`${process.env.REACT_APP_API}/products/${id}`);
  let record = response.body || {};
  dispatch(setActiveProduct(record));
};

export const { add, setActiveProduct, setProductList } = productSlice.actions

export default productSlice.reducer
