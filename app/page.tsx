'use client';

import { Container } from '@mantine/core';
import { Career } from '../components/organisms/Career/Career';
import { Expertise } from '../components/organisms/Expertise/Expertise';
import { TitleHero } from '../components/organisms/Heros/Title/Title';

const Page = () => (
  <Container size="xl">
    <section>
      <TitleHero />
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
