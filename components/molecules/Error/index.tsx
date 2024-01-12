import { CentredImage } from '@/components/atoms/CentredImage';
import { NavigationButtons } from '@/components/atoms/NavigationButtons';
import ErrorPana from '@/public/500-pana.svg';
import { SimpleGrid, Text, Title } from '@mantine/core';
import classes from './Error.module.css';

const attribution = (
  <a href="https://storyset.com/internet">Internet illustrations by Storyset</a>
);

const ErrorHero = () => (
  <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }}>
    <CentredImage
      src={ErrorPana}
      alt="Error illustration"
      attribution={attribution}
    />
    <div>
      <Title>Something is not right...</Title>
      <Text c="dimmed" className={classes['text']}>
        The page you are trying to view has failed to load. If reloading does
        not help then the service may be down, please bare with me.
      </Text>
      <NavigationButtons />
    </div>
  </SimpleGrid>
);

export { ErrorHero };
