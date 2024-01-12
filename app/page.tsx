import { Blog } from '@/components/molecules/Blog';
import { Career } from '@/components/molecules/Career';
import { Expertise } from '@/components/molecules/Expertise';
import { TitleHero } from '@/components/molecules/Heros/Title';
import { Projects } from '@/components/molecules/Projects';
import { sortedPostsData } from '@/static/sortedPostsData';
import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './page.module.css';

const Page = () => (
  <Container size="xl">
    <section>
      <TitleHero
        secondaryTitle={
          <>
            front-end / full-stack
            <br />
            software engineer
          </>
        }
      />
    </section>
    <section>
      <Title order={3}>About me</Title>
      <Text c="dimmed">
        I am a full-stack software engineer with a focus on front-end
        development. I have a passion for building beautiful, functional and
        accessible user interfaces.
      </Text>
    </section>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
      <section>
        <Title order={3}>Latest projects</Title>
        <Projects limit={2} />
      </section>

      {sortedPostsData.sorted.length > 0 && (
        <section className={classes['grow-to-sibling']}>
          <Title order={3}>Latest blog posts</Title>
          <Blog limit={1} />
        </section>
      )}
    </SimpleGrid>
    <Career />
    <Expertise />
  </Container>
);

export default Page;
