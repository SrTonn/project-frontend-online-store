import React, { Component } from 'react';
import Input from '../Input/Input';

class BuyerInfo extends Component {
  render() {
    return (
      <form>
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
          value={ fullName }
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
          value={ endereco }
          onChange={ handleChange }
          dataTestId="checkout-address"
        />
      </form>
    );
  }
}

export default BuyerInfo;
