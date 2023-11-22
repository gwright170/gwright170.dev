'use client';

import { SimpleGrid } from '@mantine/core';
import { ExpertiseCard } from '../../components/ExpertiseCard/ExpertiseCard';
import { FullHeightContainer } from '../../components/FullHeightContainer/FullHeightContainer';
import classes from './expertise.module.css';

// TODO: need additional content on this page
// TODO: text needs fleshing out
const cards = [
  {
    title: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/emoji/technologist.png', alt: 'Technologist emoji' },
  },
  {
    title: 'Front-end',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/icons/react.svg', alt: 'React logo' },
  },
  {
    title: 'Full-stack',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/icons/postgresql.svg', alt: 'Postgresql logo' },
  },
  {
    title: 'Video playback',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/emoji/television.png', alt: 'Television emoji' },
  },
  {
    title: 'Delivery at scale',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/emoji/delivery-truck.png', alt: 'Delivery truck emoji' },
  },
  {
    title: 'Coaching',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a accumsan sem. Maecenas ac faucibus lorem, et iaculis ex. Praesent ut ligula nec nulla commodo pretium.',
    image: { path: '/emoji/megaphone.png', alt: 'Megaphone emoji' },
  },
];

const Page = () => (
  <FullHeightContainer size="lg" background={classes['background']}>
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {cards.map(card => (
        <ExpertiseCard
          key={card.title}
          title={card.title}
          text={card.text}
          image={card.image}
        />
      ))}
    </SimpleGrid>
  </FullHeightContainer>
);

export default Page;
