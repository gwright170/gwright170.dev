import { SimpleGrid } from '@mantine/core';
import { Card } from '../../molecules/Card/Card';
import { cards } from './cards';

import classes from './Expertise.module.css';

const Expertise = () => (
  <SimpleGrid cols={{ base: 1, sm: 3 }} className={classes['container']}>
    {cards.map(card => (
      <Card
        key={card.title}
        title={card.title}
        content={card.content}
        image={card.image}
      />
    ))}
  </SimpleGrid>
);

export { Expertise };
