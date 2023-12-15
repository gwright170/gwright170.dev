'use client';

import { FullHeightContainer } from '../components/atoms/FullHeightContainer/FullHeightContainer';
import { Career } from '../components/organisms/Career/Career';
import { Expertise } from '../components/organisms/Expertise/Expertise';
import { HeroTitle } from '../components/organisms/HeroTitle/HeroTitle';
import classes from './home.module.css';

const Page = () => (
  <FullHeightContainer size="xl" background={classes['background']}>
    <div className={classes['content']}>
      <div className={classes['section']}>
        <HeroTitle />
      </div>

      <div className={classes['section']}>
        <Career />
      </div>

      <div className={classes['section-bottom']}>
        <Expertise />
      </div>
    </div>
  </FullHeightContainer>
);

export default Page;
