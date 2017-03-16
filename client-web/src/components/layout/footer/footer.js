import React from 'react';
import './footer.css';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle, FlatButton} from 'material-ui'

const Footer = () => {
  return (
    <div>
      <Toolbar>
        <ToolbarTitle text="Created by Chaim Lando" />

        <ToolbarGroup>
          <FlatButton label={<a href="http://www.github.com/chiptus">GitHub</a>} />
          <ToolbarSeparator />
          <FlatButton label={<a href="http://chiptus.github.com/">About</a>} />
          <ToolbarSeparator />          
          <FlatButton label={<a href="http://tdigitalnomad.blogspot.com">Blog</a>} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
};

export default Footer;