import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faMedium } from '@fortawesome/free-brands-svg-icons/faMedium';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/alexyev',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/alexander-yevchenko-1334291b3/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/alex_yevchenko',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'https://medium.com/@alexanderyevchenko',
    label: 'Medium',
    icon: faMedium,
  },
  {
    link: 'mailto:alexanderyevchenko@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
