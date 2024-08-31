import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-End Specialist',
    content: (
      <>
        <h4>Technologies</h4>
        <p>Node, Babel, Webpack, ESLint, Express, Workspaces and more</p>
        <h4>Concepts</h4>
        <p>
          Reactive UI – React, Next
          <br />
          Reactive Architecture – RxJS
          <br />
          State Management and Machines
        </p>
      </>
    ),
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
  },
  {
    title: 'Video Engineering',
    content: (
      <>
        <p>
          Mercury improved the streaming experience under challenging network
          conditions and enabled dynamic advert insertion. Served 20m views per
          week.
        </p>
        <h4>Achievements</h4>
        <p>
          Achieved error rate below 1%
          <br />
          Led 95% reduction in unrecoverable stalls
          <br />
          Engineered in-house multi-track audio solution
        </p>
      </>
    ),
  },
];

export { cards };
