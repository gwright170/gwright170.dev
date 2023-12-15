'use client';

import { Container } from '@mantine/core';
import { Career } from '../components/organisms/Career/Career';
import { Expertise } from '../components/organisms/Expertise/Expertise';
import { HeroTitle } from '../components/organisms/HeroTitle/HeroTitle';
import classes from './home.module.css';

const Page = () => (
  <Container size="xl">
    <div className={classes['content']}>
      <div className={classes['section']}>
        <HeroTitle />
      </div>

      <div className={classes['section']}>
        <Career />
      </div>

      <div className={classes['section']}>
        <Expertise />
      </div>
    </div>
  </Container>
);

export default Page;
