import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-end',
    content: (
      <>
        <p>
          My bread and butter is building interactive, efficient, and scalable
          web applications.
        </p>
        <p>
          <b>Core technologies</b>
          <br /> TypeScript, Node, Babel, Webpack,
          <br />
          ESLint, Jest
        </p>
        <p>
          <b>Libraries</b>
          <br /> React, Next, RxJS, Express,
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
        <p>
          I also dabble in back-end and full-stack development, mostly from a
          system design perspective.
        </p>
        <p>
          <b>Languages</b>
          <br /> Java, Python, Rust
        </p>
        <p>
          <b>Technologies</b>
          <br /> Kubernetes, Docker, Terraform, Redis, PostgreSQL
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
          I was a core contributor of Mercury, DAZN&apos;s custom MSE/EME
          player.
        </p>
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
