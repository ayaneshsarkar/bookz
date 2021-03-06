import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from '../components/Frontend/Home/Home';
import Books from '../components/Frontend/Books';
import SearchBooks from '../components/Frontend/Books/SearchBooks';
import SingleBook from '../components/Frontend/Books/SingleBook';
import Cart from '../components/Frontend/Cart';
import '../assets/sass/frontend/app.scss';
import AllCategoryBooks from '../components/Frontend/Books/AllCategoryBooks';
// import Error404 from '../components/Frontend/Books/404'; 

class Frontend extends Component {

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route path="/search/:term" component={SearchBooks} />
        <Route path="/category/:id/:name" component={AllCategoryBooks} />
        <Route exact path="/book/:slug/:book_code" component={SingleBook} />
        <Route exact path="/cart" component={Cart} />
        {/* <Route component={Error404} /> */}
      </Fragment>
    );
  }

}

export default Frontend;