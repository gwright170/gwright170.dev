import Player from '@/app/player';
import { TitleHero } from '@/components/molecules/TitleHero';
import { Container } from '@mantine/core';

const Page = () => (
  <Container size="sm">
    <section>
      <TitleHero secondaryTitle="Shaka Player Integration" />
    </section>
    <Player url="https://livesim.dashif.org/livesim/testpic_2s/Manifest.mpd" />
  </Container>
);

export default Page;
