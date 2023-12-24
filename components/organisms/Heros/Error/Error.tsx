import { Button, Image, SimpleGrid, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import ErrorPana from '../../../../public/500-pana.svg';
import classes from './Error.module.css';

const ErrorHero = () => (
  <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
    <div>
      <Image
        component={NextImage}
        w="100%"
        h="auto"
        src={ErrorPana}
        alt="Empty"
        className={classes['image']}
      />
      <div className={classes['attribution']}>
        <a href="https://storyset.com/internet">
          Internet illustrations by Storyset
        </a>
      </div>
    </div>
    <div>
      <Title>Something is not right...</Title>
      <Text c="dimmed" className={classes['text']}>
        The page you are trying to view has failed to load. If reloading does
        not help then the service may be down, please bare with me.
      </Text>
      <Button
        component="a"
        href="/"
        size="md"
        mt="xl"
        className={classes['filled-button']}
      >
        home
      </Button>
      <Button
        component="a"
        href="/blog"
        variant="outline"
        size="md"
        mt="xl"
        ml="sm"
        className={classes['outline-button']}
      >
        blog
      </Button>
    </div>
  </SimpleGrid>
);

export { ErrorHero };
