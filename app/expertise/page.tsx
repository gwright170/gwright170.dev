'use client';

// TODO: can we remove use client after cleaning up rem?

import { SimpleGrid, Skeleton, Title, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

const Page = () => (
  <>
    <Title>Test</Title>

    <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
    </SimpleGrid>
  </>
);

export default Page;
