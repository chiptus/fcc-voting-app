import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import CoursesListContainer from './courses-list/courses-list-container';

const CoursesPage = props => {
  return (
    <div>
      <h1>מנות</h1>
      <FlatButton>הוסף מנה</FlatButton>
      <CoursesListContainer />
      <Dialog>

      </Dialog>
    </div>
  );
};

CoursesPage.propTypes = {

};

export default CoursesPage;