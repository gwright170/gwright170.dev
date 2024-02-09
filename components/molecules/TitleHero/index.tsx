import { SocialLinks } from '@/components/atoms/SocialLinks';
import { Avatar, Image, Text, Title } from '@mantine/core';
import NextImage from 'next/image';
import { ReactNode } from 'react';
import classes from './TitleHero.module.css';

interface TitleHeroParams {
  secondaryTitle: ReactNode | string;
}

const TitleHero = ({ secondaryTitle }: TitleHeroParams) => (
  <>
    <Avatar variant="filled" className={classes['avatar']}>
      <Image
        component={NextImage}
        src="/icons/dp.png"
        width={140}
        height={140}
        alt="Headshot of George Wright (@gwright170)"
      />
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
