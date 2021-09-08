import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const NavbarFull = props => {

  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const renderAuthComponents = () => {
    return (
      <>
        <Login open={login} setLogin={setLogin} />
        <SignUp open={signup} setSignup={setSignup} />
      </>
    );
  }

  return (
    <Fragment>
      <Navbar 
        term={props.term || null}
        setLogin={setLogin} 
        setSignUp={setSignup} 
        loggedIn={props.loggedIn}
        user={props.user}
        path={props.path || null}
        navRef={props.navRef || null}
      />

      {!props.loggedIn && renderAuthComponents()}
    </Fragment>
  );
}

export default NavbarFull;