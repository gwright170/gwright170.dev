'use client';

import { Avatar, List, Title } from '@mantine/core';
import { FullHeightContainer } from '../reusable/FullHeightContainer/FullHeightContainer';
import { SocialButtons } from '../reusable/SocialButtons/SocialButtons';
import classes from './HeroMe.module.css';

const HeroMe = () => (
  <FullHeightContainer>
    <div className={classes.content}>
      <Avatar src="display-picture.jpg" size="xl" alt="it's me" />

      <Title className={classes.title}>
        <span className={classes.highlight}>Software Engineer</span>, explorer,
        amateur runner
      </Title>

      <List mt={30} spacing="sm" size="md">
        <List.Item icon="👋">Hi, I&apos;m George!</List.Item>
        <List.Item icon="💻">A full-stack Software Engineer</List.Item>
        <List.Item icon="📍">At Skyscanner, London</List.Item>
        <List.Item icon="🛠️">Specialising in TypeScript and React</List.Item>
      </List>
      <List mt={30} spacing="sm" size="md">
        <List.Item icon="🚀">
          Let&apos;s build something awesome together!
        </List.Item>
      </List>

      <SocialButtons />
    </div>
  </FullHeightContainer>
);

export { HeroMe };
