import React from 'react';
import { connect } from 'react-redux';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';
import AllBooks from './AllBooks';

const Books = props => {
  return (
    <>
      <Head title="Recommerce API Design - Books" />

      <div className="wrapper">
        <header id="header" className="header" style={{ margin: '0 -2.5rem 1.5rem -2.5rem' }}>
          <Navbar loggedIn={props.loggedIn} user={props.user} path="/books" />
        </header>
      </div>

      <main className="wrapper">
        <AllBooks />
      </main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Books);