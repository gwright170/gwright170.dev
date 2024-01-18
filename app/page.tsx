import { Blog } from '@/components/molecules/Blog';
import { Career } from '@/components/molecules/Career';
import { Expertise } from '@/components/molecules/Expertise';
import { Projects } from '@/components/molecules/Projects';
import { TitleHero } from '@/components/molecules/TitleHero';
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
      <Title order={3}>About</Title>
      <Text c="var(--mantine-color-dark-2)">
        9 years experience working with JavaScript, TypeScript and the web
        stack. Worked on a variety of projects, from small-scale web mapping
        applications to large-scale video streaming platforms and high-traffic
        developer APIs. Currently working at Skyscanner building the capability
        to compose and render highly accessibly and SEO compliant server-side
        rendered landing pages.
      </Text>
    </section>
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
      <section>
        <Title order={3}>Latest projects</Title>
        <Projects limit={2} />
      </section>

      {sortedPostsData.sorted.length > 0 && (
        <section className={classes['grow-to-sibling']}>
          <Title order={3}>Latest blog post</Title>
          <Blog limit={1} />
        </section>
      )}
    </SimpleGrid>
    <Career />
    <Expertise />
  </Container>
);

export default Page;
