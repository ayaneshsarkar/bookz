import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBookBySlug } from '../../../actions/bookActions';
import { storeCart } from '../../../actions/cartActions';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';

import FrontBox from '../../../containers/FrontBox';
import BookMedia from './BookMedia';
import BookContent from './BookContent';

const Book = props => {

  useEffect(() => {
    const getBook = async (slug) => await props.getBookBySlug(slug);
    getBook(props.match.params.book_code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = async bookId => {
    await props.storeCart({ book_id: bookId });
    props.history.push('/cart');
  }

  return (
    <>
      <Head title={ props.book.title || 'Recommerce API Design - Single Book' } />

      <div className="wrapper">
        <header id="header" className="header" style={{ margin: '0 -2.5rem 1.5rem -2.5rem' }}>
          <Navbar loggedIn={props.loggedIn} user={props.user} path="/:slug/:book_code" />
        </header>
      </div>

      <main className="wrapper" style={{ padding: '2.5rem 0' }}>
        <div id="singlebook">
          { (props.book !== []) ? 
              <>
                <BookMedia book={props.book} /> 
                <BookContent book={props.book} addToCart={addToCart} />
              </>
            : ''
          }
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
    book: state.frontBooks[ownProps.match.params.book_code] || []
  }
}

export default connect(mapStateToProps, { getBookBySlug, storeCart })(Book);