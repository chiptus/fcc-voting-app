import React, { PropTypes } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { NavLink } from 'react-router-dom';

const SignedIn = ({ goHome, goMyPolls, goNewPoll, signOut }) =>
  (<div>
    <FlatButton label={<NavLink to="/">Home</NavLink>} />
    <FlatButton label={<NavLink to="/my-polls">My Polls</NavLink>} />
    <FlatButton label={<NavLink to="/new-poll">New Poll</NavLink>} />
    <FlatButton label={<NavLink to="/sign-out">Sign Out</NavLink>} />
  </div>);

const SignedOut = ({ goHome, signIn }) =>
  (
    <div>
      <FlatButton label={<NavLink to="/">Home</NavLink>} />
      <FlatButton label={<NavLink to="/sign-in">Sign In</NavLink>} />
    </div>
  );

const Header = ({ signedIn = true }) => {


  return (
    <AppBar title="Voty"
      showMenuIconButton={false}
      className="header"
      iconElementRight={
        signedIn ? <SignedIn /> : <SignedOut />
      }
    >

    </AppBar>
  );
};

Header.propTypes = {
  signedIn: PropTypes.bool
}

export default Header;