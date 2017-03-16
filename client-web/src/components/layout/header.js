import React, { PropTypes } from 'react';
import { AppBar, FlatButton } from 'material-ui';
import { NavLink } from 'react-router-dom';

const SignedIn = ({ logout }) =>
  (<div>
    <FlatButton label={<NavLink to="/">Home</NavLink>} />
    <FlatButton label={<NavLink to="/my-polls">My Polls</NavLink>} />
    <FlatButton label={<NavLink to="/new-poll">New Poll</NavLink>} />
    <FlatButton label="Sign Out" onTouchTap={logout} />
  </div>);

const SignedOut = ({ login }) =>
  (
    <div>
      <FlatButton label={<NavLink to="/">Home</NavLink>} />
      <FlatButton label="Sign In" onTouchTap={login} />
    </div>
  );

const Header = ({ isLoggedIn = false, login, logout }) => {


  return (
    <div>
      <AppBar title="Voty"
        showMenuIconButton={false}
        className="header"
        iconElementRight={
          isLoggedIn ? <SignedIn logout={logout} /> : <SignedOut login={login} />
        }
      />
    </div>

  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
}

export default Header;