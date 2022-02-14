import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import HeadingSecondary from '../HeadindSecondary/HeadingSecondary';
import styles from './styles.module.css';

class BuyerInfo extends Component {
  render() {
    const { fullName,
      email,
      cpf,
      phone,
      cep,
      address, onFormSubmit, handleChange } = this.props;

    return (
      <div className={ styles.BuyerInfoContainer }>
        <HeadingSecondary title="Informações do comprador" />
        <form className={ styles.Form }>
          <Input
            type="text"
            name="fullname"
            className={ styles.FormInput }
            placeholder="Nome Completo"
            value={ fullName }
            onChange={ handleChange }
            dataTestId="checkout-fullname"
          />
          <Input
            type="email"
            name="email"
            className={ styles.FormInput }
            placeholder="Email"
            value={ email }
            onChange={ handleChange }
            dataTestId="checkout-email"
          />
          <Input
            type="text"
            name="cpf"
            className={ styles.FormInput }
            placeholder="CPF"
            value={ cpf }
            onChange={ handleChange }
            dataTestId="checkout-cpf"
          />
          <Input
            type="phone"
            name="phone"
            className={ styles.FormInput }
            placeholder="Telefone"
            value={ phone }
            onChange={ handleChange }
            dataTestId="checkout-phone"
          />
          <Input
            type="text"
            name="cep"
            className={ styles.FormInput }
            placeholder="CEP"
            value={ cep }
            onChange={ handleChange }
            dataTestId="checkout-cep"
          />
          <Input
            type="text"
            name="endereco"
            className={ styles.FormInput }
            placeholder="Endereço"
            value={ address }
            onChange={ handleChange }
            dataTestId="checkout-address"
          />
          <button type="submit" onSubmit={ onFormSubmit }>
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

BuyerInfo.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cpf: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  cep: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

BuyerInfo.defaultProps = {
  onFormSubmit: () => '',
  handleChange: () => '',
};

export default BuyerInfo;
