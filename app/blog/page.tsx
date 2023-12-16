import { Container } from '@mantine/core';
import { sortedPostsData } from '../../blog/sortedPostsData';
import { ArticlePaper } from '../../components/organisms/ArticlePaper/ArticlePaper';
import { HeroTitle } from '../../components/organisms/HeroTitle/HeroTitle';
import classes from './blog.module.css';

const { sorted } = sortedPostsData;

const Page = () => (
  <Container size="sm">
    <section>
      <HeroTitle />
    </section>
    {sorted.map(post => (
      <section key={post.id} className={classes['tighter-section']}>
        <ArticlePaper post={post} />
      </section>
    ))}
  </Container>
);

export default Page;
