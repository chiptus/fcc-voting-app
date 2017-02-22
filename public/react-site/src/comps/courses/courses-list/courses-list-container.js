import React, { Component, PropTypes } from 'react';
import superagent from 'superagent';

import CoursesList from './courses-list';

class CoursesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    }
  }

  componentDidMount() {
    superagent('http://localhost:8080/api/course')
      .then(result => [...result.body, "chamana", "samam"])
      .then(courses => this.setState({ courses }));
  }


  render() {
    return (

      <CoursesList courses={this.state.courses} />

    );
  }
}

CoursesListContainer.propTypes = {

};

export default CoursesListContainer;