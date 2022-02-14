import React, { Component } from 'react';
import BuyerInfo from '../../components/BuyerInfo/BuyerInfo';
import CheckoutProduts from '../../components/CheckoutProducts/CheckoutProduts';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import styles from './style.module.css';

class Checkout extends Component {
  state = {
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '', 
  }

  render() {
    const { location: { state }  } = this.props;
    console.log(state);
    return (
      <div className={ styles.CheckoutContainer }>
        <div>voltar</div>
        <CheckoutProduts products={ state } />
        <BuyerInfo />
        <PaymentMethod />
      </div>
    );
  }
}

export default Checkout;
