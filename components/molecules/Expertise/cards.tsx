import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-End Specialist',
    content: (
      <>
        <h4>Technologies</h4>
        <p>
          Node, Babel, Webpack, ESLint
          <br />
          Express, Workspaces and more
        </p>
        <h4>Technologies</h4>
        <p>
          Reactive UI – React, Next
          <br />
          Reactive Architecture – RxJS
          <br />
          State Management and Machines
        </p>
      </>
    ),
    image: { path: '/icons/react.svg', alt: 'React logo' },
  },
  {
    title: 'Technical Leadership',
    content: (
      <>
        <h4>People</h4>
        <p>
          Agile Process Transformation
          <br />
          Team & Project Leadership
          <br />
          Career Coaching & Skill Development
        </p>
        <h4>Process</h4>
        <p>
          Systems Design & Delivery
          <br />
          Continuous Integration / Delivery
        </p>
      </>
    ),
    image: { path: '/icons/postgresql.svg', alt: 'Postgresql logo' },
  },
  {
    title: 'Video playback',
    content: (
      <>
        <p>
          Mercury improved the streaming experience under challenging network
          conditions and unlocked dynamic advertising on legacy devices.
        </p>
        <h4>Achievements</h4>
        <p>
          Maintained error rate &gt; 1% (20m weekly sessions)
          <br />
          Led 95% reduction in unrecoverable stall rate
          <br />
          Engineered in-house multi-track audio solution
        </p>
      </>
    ),
    image: { path: '/icons/television.png', alt: 'Television emoji' },
  },
];

export { cards };
