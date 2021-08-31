import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar/index';
import Hero from './Hero';
import Categories from './Categories';
import Popular from './Popular';
import Featured from './Featured';
import Premium from './Premium';
import Newsletter from './Newsletter';
import Footer from '../Footer';
import Head from '../../../containers/Helmet';

const Home = props => {
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
      <Head title="Recommerce API Design" />
      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar 
              loggedIn={props.loggedIn}
              user={props.user}
            />
          </header>
        </div>
      </div>

      <main className="wrapper" id="heroWrapper">
        <Hero />
        <Categories />
        <Popular />
        <Featured />
      </main>

      <div className="full-wrapper">
        <Premium />
      </div>

      <div className="wrapper newsWrapper">
        <Newsletter />
      </div>

      <div className="full-wrapper">
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, null)(Home);