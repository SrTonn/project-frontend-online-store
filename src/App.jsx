import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Products from './components/Products/Products';

export default class App extends React.Component {
  state = {
    inputSearch: '',
    productList: [],
    cartProductList: [],
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  }

  updateState = (key, value) => {
    this.setState(() => ({
      [key]: value,
    }));
  }

  updateCartItem =({ target: { id, name } }) => {
    this.setState(({ cartProductList }) => {
      let i;
      const productList = JSON.parse(JSON.stringify(cartProductList));
      productList.forEach((product, index) => { if (product.id === +id) i = index; });
      if (name === 'less' || name === 'remove') {
        if (name === 'remove' || productList[i].quantity === 1) {
          return {
            cartProductList: cartProductList.filter((item) => item.id !== +id),
          };
        }
        productList[i].quantity -= 1;
      }
      if (name === 'add') productList[i].quantity += 1;
      productList[i].totalPrice = productList[i].price * productList[i].quantity;
      return { cartProductList: productList };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                onChange={ this.handleChange }
                updateState={ this.updateState }
              />
            ) }
          />
          <Route path="/product/:categoryId" component={ Products } />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
