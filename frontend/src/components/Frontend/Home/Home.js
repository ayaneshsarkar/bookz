import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  getPopularBooks, 
  getFeaturedBooks, 
  getPremiumBooks,
  getCategories
} from '../../../actions/homeActions';
import Navbar from '../Navbar/index';
import Hero from './Hero';
import Categories from './Categories';
import Popular from './Popular';
import Featured from './Featured';
import Premium from './Premium';
import Newsletter from './Newsletter';
import Footer from '../Footer';
import Head from '../../../containers/Helmet';

const Home = ({ 
  loggedIn, user, getPopularBooks, getFeaturedBooks, getPremiumBooks, 
  popularBooks, featuredBooks, premiumBooks 
}) => {
  const navRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    getPopularBooks();
    getFeaturedBooks();
    getPremiumBooks();
  }, [getFeaturedBooks, getPopularBooks, getPremiumBooks]);

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
      <div className="sideHeaderNav"></div>

      <div className="w-100 navBox" ref={navRef}>
        <div className="wrapper">
          <header id="header" className="header" style={{ margin: '0 -2.5rem 2.5rem -2.5rem' }}>
            <Navbar 
              loggedIn={loggedIn}
              user={user}
            />
          </header>
        </div>
      </div>

      <main className="wrapper" id="heroWrapper">
        <Hero />
        <Categories />
        <Popular books={popularBooks} />
        <Featured books={featuredBooks} />
      </main>

      <div className="full-wrapper">
        <Premium books={premiumBooks} />
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
    user: state.auth.user,
    popularBooks: Object.values(state.popularBooks),
    featuredBooks: Object.values(state.featuredBooks),
    premiumBooks: Object.values(state.premiumBooks),
    frontCategories: Object.values(state.frontCategories)
  }
}

export default connect(mapStateToProps, 
  { getPopularBooks, getFeaturedBooks, getPremiumBooks, getCategories }
)(Home);