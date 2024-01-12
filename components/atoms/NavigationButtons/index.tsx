import { Button } from '@mantine/core';
import classes from './NavigationButtons.module.css';

const NavigationButtons = () => (
  <>
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
    <Button
      component="a"
      href="/projects"
      variant="outline"
      size="md"
      mt="xl"
      ml="sm"
      className={classes['outline-button']}
    >
      projects
    </Button>
  </>
);

export { NavigationButtons };
