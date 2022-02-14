import React, { Component } from 'react';
// import styles from './styles.module.css';

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
          <span>
            <svg className="icon icon-credit-card">
              <use xlinkHref="#icon-credit-card" />
            </svg>

          </span>
        </label>
      </section>
    );
  }
}

export default PaymentMethod;
