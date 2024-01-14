import React from 'react';
import PropTypes from 'prop-types';

const SpeakingEngagements = ({
  data: {
    name, location, link, year, desc,
  },
}) => (
  <article className="jobs-container" style={{ marginBottom: '10px' }}>
    <header>
      <h4><a href={link}>{name}</a></h4>
      <p className="daterange"> {year} • {location}</p>
    </header>
    <p className="summary">{desc}</p>
  </article>
);

SpeakingEngagements.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default SpeakingEngagements;
