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
  title: 'Front-End Staff Software Engineer | George Wright (@gwright170)',
  keywords: 'George Wright, gwright170, Software Engineer, Front-End, Staff',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/',
    title: 'Front-End Staff Software Engineer | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

const Page = () => (
  <Container size="xl">
    <section>
      <TitleHero secondaryTitle={<>Front-End Software Engineer</>} />
    </section>
    <section>
      <Title order={3}>About</Title>
      <Text className={classes['about-text']}>
        10 years of experience working with TypeScript, JavaScript and the
        modern web stack. Lead architectural discussions and decisions in the
        front-end space, ensuring teams can deliver at high velocity, on strong
        and stable software foundations. At Skyscanner I created and own the
        Peregrine project, enabling Skyscanner to serve programmatic SEO landing
        pages configured from Contentful whilst refreshing Falcon&apos;s
        technical foundations. At DAZN I led the Mercury project, DAZN&apos;s
        in-house general-purpose video player and winner of DAZN&apos;s Tech
        Innovation award 2023 Q1.
      </Text>
    </section>
    <section>
      <Title order={3}>Career</Title>
      <Career />
    </section>
    <Expertise />
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" verticalSpacing={0}>
      {sortedPostsData.sorted.length > 0 && (
        <div className={classes['grow-to-sibling']}>
          <Title order={3} pt={'xl'}>
            Blog Posts
          </Title>
          <Blog limit={1} />
        </div>
      )}
      <div>
        <Title order={3} py={'xl'}>
          Projects
        </Title>
        <Projects limit={2} />
      </div>
    </SimpleGrid>
  </Container>
);

export default Page;
