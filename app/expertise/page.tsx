'use client';

import { SimpleGrid } from '@mantine/core';
import { ExpertiseCard } from '../../components/ExpertiseCard/ExpertiseCard';
import { FullHeightContainer } from '../../components/FullHeightContainer/FullHeightContainer';
import { cards } from './cards';
import classes from './expertise.module.css';

const Page = () => (
  <FullHeightContainer size="lg" background={classes['background']}>
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {cards.map(card => (
        <ExpertiseCard
          key={card.title}
          title={card.title}
          content={card.content}
          image={card.image}
        />
      ))}
    </SimpleGrid>
  </FullHeightContainer>
);

export default Page;
