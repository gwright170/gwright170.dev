import { Blog } from '@/components/molecules/Blog';
import { Career } from '@/components/molecules/Career';
import { Expertise } from '@/components/molecules/Expertise';
import { Projects } from '@/components/molecules/Projects';
import { TitleHero } from '@/components/molecules/TitleHero';
import { sortedPostsData } from '@/static/sortedPostsData';
import { Container, SimpleGrid, Text, Title } from '@mantine/core';
import { Metadata } from 'next';
import classes from './page.module.css';

export const metadata: Metadata = {
  title:
    'Front-end / Full-stack Software Engineer | George Wright (@gwright170)',
  keywords:
    'George Wright, gwright170, Software Engineer, Front-end, Full-stack',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/',
    title:
      'Front-end / Full-stack Software Engineer | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

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
      <Text className={classes['about-text']}>
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
    <Expertise />
    <Career />
  </Container>
);

export default Page;
