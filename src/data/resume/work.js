/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Cultura',
    position: 'Co-founder',
    url: 'https://www.culturafarms.ca/landing.html',
    startDate: '2023-06-01',
    highlights: [
      'Co-Founded app for local farmers including expenditure, crop phenology, and weather',
      'Won BETA Camp Hackathon and Buildspace Top 32, raised grant funding from Emergent Ventures, Ingenious Plus, and others',
    ],
  },
  {
    name: 'CAE',
    position: 'Consultant, PM',
    url: 'https://www.cae.com/',
    startDate: '2023-02-01',
    endDate: '2023-03-01',
    highlights: [
      'Tasked with identifying new market verticals for existing hardware and infrastructure to boost revenue',
      'Month-long intensive research and testing project included meeting users and creating business forecasts',
      'Created a full pitch deck outlining team\'s solution, presented to CAE board',
      'As Project Manager, assgined and delegated work, kept team on task and created deadlines for projects',
    ],
  },
  {
    name: 'The Catherine Wheel',
    position: 'Intern',
    url: 'https://www.thecatherinewheel.co/',
    startDate: '2022-07-01',
    endDate: '2022-08-01',
    highlights: [
      'Conducted market research on emerging tech verticals and potential investors',
      'Aided 3 current portfolio companies with market insight and vetted prospective investments',
    ],
  },
  {
    name: 'IKEA',
    position: 'Consultant, PM',
    url: 'https://medium.com/studentsxstudents/what-i-learned-in-a-month-working-alongside-ikea-and-how-you-can-use-it-8e7cc7836b9b',
    startDate: '2022-02-01',
    endDate: '2022-03-01',
    highlights: [
      'Tasked with identifying emergent trends in transportation and identifying the ideal store of 2030',
      'Month-long intensive research and testing project included meeting with clients and creating economically sustainable business models',
      'Created a full pitch deck outlining team\'s solution, presented to top IKEA execs',
      'As Project Manager, assgined and delegated work, kept team on task and created deadlines for projects',
    ],
  },
  {
    name: 'Jobby',
    position: 'Intern',
    url: 'https://www.linkedin.com/company/joinjobby/',
    startDate: '2022-06-01',
    endDate: '2022-07-01',
    highlights: [
      'Joined as an intern in early-stage startup, working with in an incubator environment',
      'Worked on every aspect of the company, from outreach to user engagement and retention',
      'Secured office tours at companies including KPMG, Scotiabank, IBM, CIBC and others',
    ],
  },
  {
    name: 'Geek Culture, StudentsxStudents, VisonaryHub',
    position: 'Writer',
    url: 'https://medium.com/@alexanderyevchenko',
    startDate: '2021-09-01',
    highlights: [
      'Wrote articles about emerging technology, philosophy, and personal growth, sharing knowledge and experiences with others',
      'Reached an audience of 30,000+ people across all publications on Medium and Substack',
      'Work featured in the National Observer and Forbes',
    ],
  },
];

export default work;
