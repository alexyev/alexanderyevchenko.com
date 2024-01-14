import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import References from '../components/Resume/References';
import Skills from '../components/Resume/SkillsPage';
import Speaking from '../components/Resume/Speaking';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import skills from '../data/resume/skills';
import speaking from '../data/resume/speaking';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Speaking: () => <Speaking data={speaking} />,
  Skills: () => <Skills skills={{ skills }} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Alexander Yevchenko's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
