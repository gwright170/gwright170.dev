import { Blog } from '@/components/molecules/Blog';
import { TitleHero } from '@/components/molecules/TitleHero';
import { Container } from '@mantine/core';

const Page = () => (
  <Container size="sm">
    <section>
      <TitleHero secondaryTitle="software engineering blog" />
    </section>
    <Blog />
  </Container>
);

export default Page;
