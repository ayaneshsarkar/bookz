import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Head from '../../../containers/Helmet';
import Navbar from '../Navbar/index';

const AllBooks = props => {
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
      <Head title="Bookz - 404 Not Found" />

      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar loggedIn={props.loggedIn} user={props.user} path="/404" />
          </header>
        </div>
      </div>

      <main className="wrapper" id="heroWrapper">
        <div id="allbooks" className="allbooks">
          <h3 className="list__title">404 Not Found</h3>
        </div>
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

export default connect(mapStateToProps, null)(AllBooks);