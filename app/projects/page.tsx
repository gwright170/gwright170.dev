import { Projects } from '@/components/molecules/Projects';
import { TitleHero } from '@/components/molecules/TitleHero';
import { Container } from '@mantine/core';

const Page = () => (
  <Container size="sm">
    <section>
      <TitleHero secondaryTitle="personal projects" />
    </section>
    <Projects />
  </Container>
);

export default Page;
