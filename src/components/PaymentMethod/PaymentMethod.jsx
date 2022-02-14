import React, { Component } from 'react';

class PaymentMethod extends Component {
  render() {
    return (
      <section>
        <label htmlFor="paymentmethod">
          <input
            type="radio"
            id="paymentmethod"
            name="category"
          />
          <span className={ styles.PaymentMethodIcon }>
            { item.name }
          </span>
        </label>
      </section>
    );
  }
}

export default PaymentMethod;
