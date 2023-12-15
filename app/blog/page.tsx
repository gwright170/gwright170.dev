import { Container } from '@mantine/core';
import { getSortedPostsData } from '../../blog/getSortedPostsData';
import { ArticlePaper } from '../../components/organisms/ArticlePaper/ArticlePaper';
import { HeroTitle } from '../../components/organisms/HeroTitle/HeroTitle';
import classes from './blog.module.css';

const posts = getSortedPostsData();

const Page = () => (
  <Container size="sm">
    <section>
      <HeroTitle />
    </section>
    {posts.map(post => (
      <section key={post.id} className={classes['tighter-section']}>
        <ArticlePaper post={post} />
      </section>
    ))}
  </Container>
);

export default Page;
