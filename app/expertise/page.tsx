'use client';

import { SimpleGrid, Skeleton, Title, rem } from '@mantine/core';
import { FullHeightContainer } from '../../components/FullHeightContainer/FullHeightContainer';
import classes from './expertise.module.css';

// TODO: can we remove use client after cleaning up rem?
const PRIMARY_COL_HEIGHT = rem(300);

const Page = () => (
  <FullHeightContainer my="md" background={classes['background']}>
    <Title>My expertise</Title>

    <SimpleGrid
      cols={{ base: 1, sm: 3 }}
      spacing="md"
      className={classes['marginTop']}
    >
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
    </SimpleGrid>
  </FullHeightContainer>
);

export default Page;
