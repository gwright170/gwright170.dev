import { Card } from '@/components/molecules/Card/Card';
import { SimpleGrid, Title } from '@mantine/core';
import { cards } from './cards';

import classes from './Expertise.module.css';

const Expertise = () => (
  <section className={classes['container']}>
    <Title order={3}>Expertise</Title>
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      {cards.map(card => (
        <Card
          key={card.title}
          title={card.title}
          content={card.content}
          image={card.image}
        />
      ))}
    </SimpleGrid>
  </section>
);

export { Expertise };
