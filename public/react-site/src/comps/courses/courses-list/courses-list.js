import React, { PropTypes } from 'react';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';

const CoursesList = ({ courses }) => {
  return (
    <List>
      {
        courses.map(course => <ListItem key={course}>{course}</ListItem>)
      }
    </List>
  );
};

CoursesList.propTypes = {

};

export default CoursesList;