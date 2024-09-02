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
      Home
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
      Blog
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
      Projects
    </Button>
  </>
);

export { NavigationButtons };
