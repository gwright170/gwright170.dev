import { ExpertiseCard } from '@/components/atoms/Cards/ExpertiseCard';
import { SimpleGrid, Title } from '@mantine/core';
import { cards } from './cards';

const Expertise = () => (
  <section>
    <Title order={3} pb={'xl'}>
      Expertise
    </Title>
    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" verticalSpacing={0}>
      {cards.map(card => (
        <ExpertiseCard key={card.title} {...card} />
      ))}
    </SimpleGrid>
  </section>
);

export { Expertise };
