import { List, Text } from '@mantine/core';
import { ExpertiseCardParams } from '../../components/ExpertiseCard/ExpertiseCard';

const cards: ExpertiseCardParams[] = [
  {
    title: 'Front-end',
    content: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
        accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut
        ligula nec nulla commodo pretium.
      </Text>
    ),
    image: { path: '/icons/react.svg', alt: 'React logo' },
  },
  {
    title: 'Full-stack',
    content: (
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
        accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut
        ligula nec nulla commodo pretium.
      </Text>
    ),
    image: { path: '/icons/postgresql.svg', alt: 'Postgresql logo' },
  },
  {
    title: 'Video playback',
    content: (
      <>
        <Text>Lead development of Mercury, DAZN’s custom MSE/EME player.</Text>
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
];

export { cards };
