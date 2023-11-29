import { List, Text } from '@mantine/core';
import { ExpertiseCardParams } from '../../components/ExpertiseCard/ExpertiseCard';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-end',
    content: (
      <>
        <Text>
          I build interactive, efficient, and scalable web applications.
        </Text>
        <List mt={8} spacing="sm" size="md">
          <List.Item icon="⚙️">
            <b>Core technologies</b>
            <br /> TypeScript, Node.js, Babel, Webpack, ESLint, Jest
          </List.Item>
          <List.Item icon="📚">
            <b>Libraries</b>
            <br /> React, Next.js, RxJS, Express.js,
            <br />
            react-testing-library
          </List.Item>
        </List>
      </>
    ),
    image: { path: '/icons/react.svg', alt: 'React logo' },
  },
  {
    title: 'Video playback',
    content: (
      <>
        <Text>
          I lead the development of Mercury, DAZN’s custom MSE/EME player.
        </Text>
        <List mt={8} spacing="sm" size="md">
          <List.Item icon="🔧">
            improved the streaming experience under challenging network
            conditions
          </List.Item>
          <List.Item icon="💸">
            unlocked dynamic advertising on legacy devices
          </List.Item>
          <List.Item icon="📦">
            deployed to all major TV and set-top box platforms
          </List.Item>
        </List>
      </>
    ),
    image: { path: '/emoji/television.png', alt: 'Television emoji' },
  },
  {
    title: 'Full-stack',
    content: (
      <>
        <Text>
          I also dabble in back-end and full-stack development, mostly when it
          comes to system design.
        </Text>
        <List mt={8} spacing="sm" size="md">
          <List.Item icon="🤟">
            <b>Languages </b>
            <br /> Java, Python, (wow, such diversity). Some PostgreSQL and
            Redis too.
          </List.Item>
          <List.Item icon="✨">
            <b>Buzzwords</b>
            <br /> I&apos;ll save you the trouble
          </List.Item>
        </List>
      </>
    ),
    image: { path: '/icons/postgresql.svg', alt: 'Postgresql logo' },
  },
];

export { cards };
