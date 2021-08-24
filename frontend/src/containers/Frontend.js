import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Frontend/Home/Home';
import Books from '../components/Frontend/Books';
import SingleBook from '../components/Frontend/Books/SingleBook';
import Cart from '../components/Frontend/Cart';
import '../assets/sass/frontend/app.scss';

class Frontend extends Component {

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/book/:slug/:book_code" component={SingleBook} />
        <Route exact path="/cart" component={Cart} />
      </Fragment>
    );
  }

}

export default Frontend;