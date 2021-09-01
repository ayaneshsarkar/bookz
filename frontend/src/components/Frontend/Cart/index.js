import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';
import AllCart from './AllCart';

const Cart = props => {
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

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
      <Head title='Recommerce API Design - Cart' />

      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar loggedIn={props.loggedIn} user={props.user} path="/cart" />
          </header>
        </div>
      </div>

      <main className="wrapper" id="heroWrapper">
        <AllCart />
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

export default connect(mapStateToProps, null)(Cart);