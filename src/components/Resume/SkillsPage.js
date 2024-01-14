import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {
  // Check if skills.skills is available and is an array
  const skillTitles = skills?.skills?.map((skill) => skill.title) || [];
  const skillString = skillTitles.join(', ');

  return (
    <div className="experience" style={{ marginTop: '20px' }}>
      <div className="link-to" id="skills" />
      <div className="title" style={{ marginBottom: '-10px', marginTop: '10px' }}>
        <h3>Skills</h3>
      </div>
      <p className="summary">{skillString}</p>
      <div className="title" style={{ marginBottom: '-10px', marginTop: '10px' }}>
        <h3>Languages</h3>
      </div>
      <p className="summary">English (Native), Ukrainian (Native), French (Advanced), Spanish (Advanced) </p>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.shape({
    skills: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Skills;
