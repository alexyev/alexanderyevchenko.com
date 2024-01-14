import React from 'react';
import PropTypes from 'prop-types';

import Engagement from './Speaking/engagement';

const Speaking = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="speaking" />
    <div className="title">
      <h3>Speaking Engagements</h3>
    </div>
    {data.map((engagement) => (
      <Engagement
        data={engagement}
        key={`${engagement.name}`}
      />
    ))}
  </div>
);

Speaking.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string,
    location: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.string,
    desc: PropTypes.string,
  })),
};

Speaking.defaultProps = {
  data: [],
};

export default Speaking;
