import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { getBookBySlug } from '../../../actions/bookActions';
import { storeCart } from '../../../actions/cartActions';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';

// eslint-disable-next-line no-unused-vars
import FrontBox from '../../../containers/FrontBox';
import BookMedia from './BookMedia';
import BookContent from './BookContent';

const Book = props => {
  const navRef = useRef(null);
  const [qty, setQty] = useState(1);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const { getBookBySlug, match }  = props;

  useEffect(() => {
    getBookBySlug(match.params.book_code);
  }, [getBookBySlug, match.params.book_code]);

  const addToCart = async bookId => {
    await props.storeCart({ book_id: bookId, quantity: qty || 1 });
    window.location.href = '/cart';
  }

  window.addEventListener('scroll', () => {
    if(navRef && navRef.current) {
      if(lastScrollY < window.scrollY) {
        navRef.current.classList.add('bx');
      } else if(lastScrollY <= 5) {
        navRef.current.classList.remove('bx');
      }
    }

    setLastScrollY(window.scrollY);
  });

  return (
    <>
      <Head title={ props.book.title || 'Recommerce API Design - Single Book' } />

      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar loggedIn={props.loggedIn} user={props.user} path="/:slug/:book_code" />
          </header>
        </div>
      </div>

      <main className="wrapper singleBookWrapper" id="heroWrapper">
        <div id="singlebook">
          { (props.book !== []) ? 
              <>
                <BookMedia book={props.book} /> 
                <BookContent book={props.book} addToCart={addToCart} setQty={setQty} />
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