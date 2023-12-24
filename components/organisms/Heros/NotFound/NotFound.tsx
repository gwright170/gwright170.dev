import { Button, Image, SimpleGrid, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import ErrorPana from '../../../../public/404-pana.svg';
import classes from './NotFound.module.css';

const NotFoundHero = () => (
  <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
    <div>
      <Title>We can&apos;t find this page...</Title>
      <Text c="dimmed" className={classes['text']}>
        The page you are trying to view does not exist. You may have mistyped
        the address, or the page has been moved to another URL.
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
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </div>
    </div>
  </SimpleGrid>
);

export { NotFoundHero };
