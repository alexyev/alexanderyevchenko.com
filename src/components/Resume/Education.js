import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    <div style={{ marginBottom: '-30px' }}>
      {data.map((degree) => (
        <Degree
          data={degree}
          key={degree.school}
        />
      ))}
    </div>
    <article className="degree-container" style={{ marginBottom: '30px' }}>
      <h4 className="daterange">GPA: 4.0, SAT: 1590</h4>
    </article>
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Education.defaultProps = {
  data: [],
};

export default Education;
