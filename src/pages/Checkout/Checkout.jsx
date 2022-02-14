import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuyerInfo from '../../components/BuyerInfo/BuyerInfo';
import CheckoutProduts from '../../components/CheckoutProducts/CheckoutProduts';
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod';
import styles from './style.module.css';

class Checkout extends Component {
  // state = {
  //   fullName: '',
  //   email: '',
  //   cpf: '',
  //   phone: '',
  //   cep: '',
  //   address: '',
  // }

  render() {
    const { location: { state } } = this.props;
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

Checkout.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    state: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Checkout;
