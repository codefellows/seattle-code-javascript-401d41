import React from 'react';

import CurrentCategory from './current-category';
import Categories from './categories';
import Products from './products';
import SimpleCart from '../cart/simple-cart';

export default function Storefront() {

  return (
    <>
      <Categories />
      <CurrentCategory />
      <Products />
      <SimpleCart />
    </>
  );

}
