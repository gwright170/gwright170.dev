'use client';

// TODO: can we remove use client after cleaning up rem?

import { SimpleGrid, Skeleton, rem } from '@mantine/core';
import { FullHeightContainer } from '../reusable/FullHeightContainer/FullHeightContainer';

const PRIMARY_COL_HEIGHT = rem(300);

const Expertise = () => (
  <FullHeightContainer>
    <SimpleGrid
      cols={{ base: 1, sm: 3 }}
      spacing="md"
      styles={{ root: { width: '100%' } }}
    >
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
    </SimpleGrid>
  </FullHeightContainer>
);
export { Expertise };
