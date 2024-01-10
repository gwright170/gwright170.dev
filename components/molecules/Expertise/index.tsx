import { ExpertiseCard } from '@/components/atoms/Cards/ExpertiseCard';
import { SimpleGrid, Title } from '@mantine/core';
import { cards } from './cards';

import classes from './Expertise.module.css';

const Expertise = () => (
  <section className={classes['container']}>
    <Title order={3}>Expertise</Title>
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {cards.map(card => (
        <ExpertiseCard key={card.title} {...card} />
      ))}
    </SimpleGrid>
  </section>
);

export { Expertise };
