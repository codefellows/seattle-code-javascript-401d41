import React from 'react';

import { Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import Storefront from './components/storefront/storefront.js';
import Cart from './components/cart/checkout.js';
import Product from './components/product/details.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

export default function Album() {

  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Route exact path="/" component={Storefront} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </main>
      <Footer />
    </>
  );
}
