'use client';

import { List, Title } from '@mantine/core';
import { FullHeightContainer } from '../components/FullHeightContainer/FullHeightContainer';
import { SocialLinks } from '../components/SocialLinks/SocialLinks';
import classes from './home.module.css';

const Page = () => (
  <FullHeightContainer size="md" background={classes['background']}>
    <div className={classes.content}>
      <Title className={classes.title}>
        <span className={classes.highlight}>Software Engineer</span>
        <br />
        front-end / full-stack
      </Title>

      <List mt={30} spacing="sm" size="md">
        <List.Item icon="👋">Hi, I&apos;m George!</List.Item>
        <List.Item icon="💻">
          A front-end / full-stack Software Engineer
        </List.Item>
        <List.Item icon="📺">
          Experienced in adaptive bitrate streaming (MSE / EME)
        </List.Item>
        <List.Item icon="🛠️">Specialising in Node, TypeScript, React</List.Item>
        <List.Item icon="📍">Working at Skyscanner, London</List.Item>
      </List>
      <List mt={30} spacing="sm" size="md">
        <List.Item icon="🚀">
          <i>Let&apos;s build together!</i>
        </List.Item>
      </List>

      <SocialLinks />
    </div>
  </FullHeightContainer>
);

export default Page;
