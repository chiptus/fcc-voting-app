import React from 'react';
import { AppBar, FlatButton } from 'material-ui';

const SignedIn =
  (<div>
    <FlatButton label="Home" />
    <FlatButton label="My Polls" />
    <FlatButton label="New Poll" />
    <FlatButton label="Sign Out" />
  </div>);

const SignedOut =
  (
    <div>
      <FlatButton label="Home" />
      <FlatButton label="Sign In" />
    </div>
  );

const Header = ({signedIn = true}) => {


  return (
    <AppBar title="Voty"
      showMenuIconButton={false}
      className="header"
      iconElementRight={
        signedIn ? SignedIn : SignedOut
      }
    >

    </AppBar>
  );
};

export default Header;