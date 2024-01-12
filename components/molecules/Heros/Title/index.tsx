import { SocialLinks } from '@/components/atoms/SocialLinks';
import { Avatar, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { ReactNode } from 'react';
import classes from './Title.module.css';

interface TitleHeroParams {
  secondaryTitle: ReactNode | string;
}

const TitleHero = ({ secondaryTitle }: TitleHeroParams) => (
  <>
    <Avatar
      variant="filled"
      style={{ width: 120, height: 120 }}
      className={classes['avatar']}
    >
      <Image src="/dp.png" width={140} height={140} alt="George" />
    </Avatar>
    <div className={classes['title']}>
      <Text
        component="h1"
        variant="gradient"
        className={classes['primary-title']}
      >
        George Wright
      </Text>
      <Title order={2} className={classes['secondary-title']}>
        {secondaryTitle}
      </Title>
      <SocialLinks />
    </div>
  </>
);

export { TitleHero };
