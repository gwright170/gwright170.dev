import { CentredImage } from '@/components/atoms/CentredImage';
import { NavigationButtons } from '@/components/atoms/NavigationButtons';
import ErrorPana from '@/public/images/404-pana.svg';
import { SimpleGrid, Text, Title } from '@mantine/core';
import classes from './NotFound.module.css';

const attribution = (
  <a href="https://storyset.com/web">Web illustrations by Storyset</a>
);

const NotFoundHero = () => (
  <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
    <CentredImage
      src={ErrorPana}
      alt="Not found illustration"
      attribution={attribution}
    />
    <div>
      <Title>We can&apos;t find this page...</Title>
      <Text c="dimmed" className={classes['text']}>
        The page you are trying to view does not exist. You may have mistyped
        the address, or the page has been moved to another URL.
      </Text>
      <NavigationButtons />
    </div>
  </SimpleGrid>
);

export { NotFoundHero };
