import { TitleHero } from '@/components/molecules/TitleHero';
import { Container } from '@mantine/core';
import dynamic from 'next/dynamic';

const ShakaPlayer = dynamic(() => import('../../player'), {
  ssr: false,
});

const Page = () => (
  <Container size="sm">
    <section>
      <TitleHero secondaryTitle="Shaka Player Integration" />
    </section>
    <ShakaPlayer url="https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd" />
  </Container>
);

export default Page;
