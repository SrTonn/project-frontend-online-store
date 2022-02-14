import React, { Component } from 'react';
import BuyerInfo from '../../components/BuyerInfo/BuyerInfo';
import CheckoutProduts from '../../components/CheckoutProducts/CheckoutProduts';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import styles from './style.module.css';

class Checkout extends Component {
  render() {
    return (
      <div className={ styles.CheckoutContainer }>
        <div>voltar</div>
        <CheckoutProduts />
        <BuyerInfo />
        <PaymentMethod />
      </div>
    );
  }
}

export default Checkout;
