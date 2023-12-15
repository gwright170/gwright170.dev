import { Avatar, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { SocialLinks } from '../../molecules/SocialLinks/SocialLinks';
import classes from './HeroTitle.module.css';

const HeroTitle = () => (
  <>
    <Avatar
      variant="filled"
      style={{ width: 120, height: 120 }}
      className={classes['avatar']}
    >
      <Image src="/dp.png" width={140} height={140} alt="George" />
    </Avatar>
    <div className={classes['title']}>
      <Text variant="gradient" className={classes['primary-title']}>
        George Wright
      </Text>
      <Title className={classes['secondary-title']}>
        full-stack / front-end
        <br />
        software engineer
      </Title>
      <SocialLinks />
    </div>
  </>
);

export { HeroTitle };
