import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import CoursesPage from './comps/courses/page';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import theme from './theme';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDrawer: false,
    }
  }

  toggleDrawer = () => {
    this.setState({ openDrawer: !this.state.openDrawer });
  }

  render() {
    return (
      <BrowserRouter >
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <Drawer open={this.state.openDrawer} docked={false} onRequestChange={() => console.log('requres')}>
              <MenuItem secondaryText={'X'} onTouchTap={this.toggleDrawer}></MenuItem>
              <NavLink to="/courses" activeClassName="active"><MenuItem  onTouchTap={this.toggleDrawer}>מנות</MenuItem></NavLink>
              <NavLink to="/menus" activeClassName="active"><MenuItem onTouchTap={this.toggleDrawer}>תפריטים</MenuItem></NavLink>
              <NavLink to="/events" activeClassName="active"><MenuItem onTouchTap={this.toggleDrawer}>אירועים</MenuItem></NavLink>
              <NavLink to="/ingredients" activeClassName="active"><MenuItem onTouchTap={this.toggleDrawer}>רכיבים</MenuItem></NavLink>
            </Drawer>
            <div className="container">
              <AppBar title="מחשבון כמויות" onLeftIconButtonTouchTap={this.toggleDrawer}>

              </AppBar>
              <div className="content">
                <Route path="/courses" render={() => <CoursesPage />} />
                <Route path="/menus" render={() => <div>menu</div>} />
                <Route path="/events" render={() => <div>events</div>} />
                <Route path="/ingredients" render={() => <div>ingredients</div>} />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
