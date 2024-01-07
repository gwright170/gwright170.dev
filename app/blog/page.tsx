import { sortedPostsData } from '@/blog/sortedPostsData';
import { ArticlePaper } from '@/components/organisms/ArticlePaper/ArticlePaper';
import { TitleHero } from '@/components/organisms/Heros/Title/Title';
import { Container } from '@mantine/core';

const { sorted } = sortedPostsData;

const Page = () => (
  <Container size="sm">
    <section>
      <TitleHero />
    </section>
    {sorted.map(post => (
      <section key={post.id}>
        <ArticlePaper post={post} />
      </section>
    ))}
  </Container>
);

export default Page;
