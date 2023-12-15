import { Text } from '@mantine/core';
import classes from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <Text className={classes['social-links']}>
      <a href="https://github.com/gwright170">GitHub</a>
      <span>&nbsp;&#8226;&nbsp;</span>
      <a href="https://www.linkedin.com/in/gwright170">LinkedIn</a>
      <span>&nbsp;&#8226;&nbsp;</span>
      <a href="https://www.x.com/gwright170">Twitter / 𝕏</a>
    </Text>
  );
};

export { SocialLinks };
