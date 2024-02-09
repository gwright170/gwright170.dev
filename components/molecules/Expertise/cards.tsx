import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-end',
    content: (
      <>
        <p>Interactive, scalable web applications.</p>
        <h4>Core technologies</h4>
        <p>TypeScript, Node, Babel, Webpack, ESLint</p>
        <h4>Libraries</h4>
        <p>
          React, Next, RxJS, Express, Jest,
          <br />
          react-testing-library
        </p>
      </>
    ),
    image: { path: '/icons/react.svg', alt: 'React logo' },
  },
  {
    title: 'Full-stack',
    content: (
      <>
        <p>Back-end and full-stack development</p>
        <h4>Languages</h4>
        <p>Java, Python, Rust</p>
        <h4>Technologies</h4>
        <p>Kubernetes, Docker, Terraform, Redis, PostgreSQL</p>
      </>
    ),
    image: { path: '/icons/postgresql.svg', alt: 'Postgresql logo' },
  },
  {
    title: 'Video playback',
    content: (
      <>
        <p>Core contributor of Mercury, DAZN&apos;s custom MSE/EME player.</p>
        <p>
          Mercury improved the streaming experience under challenging network
          conditions and unlocked dynamic advertising on legacy devices. It
          remains DAZN&apos;s primary video playback solution and is deployed to
          all major TV and set-top box platforms.
        </p>
      </>
    ),
    image: { path: '/icons/television.png', alt: 'Television emoji' },
  },
];

export { cards };
