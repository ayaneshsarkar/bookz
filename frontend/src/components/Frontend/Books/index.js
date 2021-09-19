import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';
import AllBooks from './AllBooks';

const Books = props => {
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
      <Head title="Bookz — Books" />

      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar loggedIn={props.loggedIn} user={props.user} path="/books" />
          </header>
        </div>
      </div>

      <main className="wrapper" id="heroWrapper">
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