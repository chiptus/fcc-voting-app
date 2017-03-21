import React, { PropTypes } from 'react';
import { AppBar, FlatButton, Chip } from 'material-ui';
import { NavLink } from 'react-router-dom';

const SignedIn = ({ logout, username }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div>
      <FlatButton label={<NavLink to="/">Home</NavLink>} />
      |
      <FlatButton label={<NavLink to="/my-polls">My Polls</NavLink>} />
      |
      <FlatButton label={<NavLink to="/new-poll">New Poll</NavLink>} />
      |
      <FlatButton label="Sign Out" onTouchTap={logout} />
    </div>
    <div style={{ backgroundColor: '#8888e2', padding: '5px' }}>
      {username}
    </div>
  </div>
);

const SignedOut = ({ login }) => (
  <div>
    <FlatButton label={<NavLink to="/">Home</NavLink>} />
    <FlatButton label="Sign In" onTouchTap={login} />
  </div>
);

const Header = ({ isLoggedIn = false, login, logout, username }) => {
  return (
    <div>
      <AppBar
        title="Voty"
        showMenuIconButton={false}
        className="header"
        iconElementRight={
          isLoggedIn
            ? <SignedIn {...{ username, logout }} />
            : <SignedOut login={login} />
        }
      />
    </div>
  );
};

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};

export default Header;
