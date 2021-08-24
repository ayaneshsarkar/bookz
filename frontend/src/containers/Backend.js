import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Admin from '../components/Admin/Admin';
import AllCategories from '../components/Admin/Categories/AllCategories';
import AddCategory from '../components/Admin/Categories/AddCategory';
import EditCategory from '../components/Admin/Categories/EditCategory';

import Books from '../components/Admin/Books/AllBooks';
import AddBook from '../components/Admin/Books/AddBook';
import EditBook from '../components/Admin/Books/EditBook';
import '../assets/sass/admin/admin.scss';

class Backend extends Component {

  render() {
    return (
      <Fragment>
        {/* Categories */}
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/categories" component={AllCategories} />
        <Route exact path="/admin/add-category" component={AddCategory} />
        <Route path="/admin/edit-category/:id" component={EditCategory} />

        {/* Books */}
        <Route exact path="/admin/books" component={Books} />
        <Route exact path="/admin/add-book" component={AddBook} />
        <Route path="/admin/edit-book/:id" component={EditBook} />
      </Fragment>
    );
  }

}


export default Backend;