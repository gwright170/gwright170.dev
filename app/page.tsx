'use client';

import { Container } from '@mantine/core';
import { Career } from '../components/organisms/Career/Career';
import { Expertise } from '../components/organisms/Expertise/Expertise';
import { HeroTitle } from '../components/organisms/HeroTitle/HeroTitle';

const Page = () => (
  <Container size="xl">
    <section>
      <HeroTitle />
    </section>

    <section>
      <Career />
    </section>

    <section>
      <Expertise />
    </section>
  </Container>
);

export default Page;
