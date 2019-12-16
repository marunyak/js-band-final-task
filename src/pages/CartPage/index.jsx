import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import Main from '../../components/Main';
import CartList from './components/CartList';

function Cart() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <CartList />
      </Main>
    </>
  );
}
export default Cart;
