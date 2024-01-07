import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact ALexander Yevchenko via email at alexanderyevchenko.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can message me at: </p>
        <p><a href="mailto:alexanderyevchenko@gmail.com">alexanderyevchenko@gmail.com</a></p>
        <p><a href="https://twitter.com/ayevch">@ayevc</a> on Twitter</p>
        <p><a href="https://www.linkedin.com/in/alexanderyevchenko/">LinkedIn</a></p>
        <br />
        <p>Or check out my work here:</p>
        <p><a href="https://substack.com/@yevchenko">Substack</a></p>
        <p><a href="https://medium.com/@alexanderyevchenko">Medium</a></p>
        <p><a href="https://www.youtube.com/channel/UCRD_fhqKNaTI8TGliToviGA">YouTube</a></p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
