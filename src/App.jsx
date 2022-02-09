import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';

export default class App extends React.Component {
  state = {
    inputSearch: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={ () => (
              <Home
                { ...this.state }
                onChange={ this.handleChange }
              />
            ) }
          />
          <Route path="*" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}
