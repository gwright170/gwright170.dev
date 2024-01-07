import { sortedPostsData } from '@/blog/sortedPostsData';
import { PostData } from '@/types/PostData';
import { Container, Text, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import classes from './blogpost.module.css';

const generateStaticParams = () => sortedPostsData.sorted;

const Page = ({ params }: { params: PostData }) => {
  const { id } = params;
  const post = sortedPostsData.posts[id];

  if (!post) return notFound();

  return (
    <Container size="sm">
      <div>
        <section>
          <Title className={classes['title']}>{post.title}</Title>
          <Text mt="sm" c="dimmed" className={classes['metadata']}>
            <span>
              <b>George Wright</b>
              &nbsp;&#8226;&nbsp;
              {post.date}
            </span>
          </Text>
        </section>
        <article>
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </Container>
  );
};

export { generateStaticParams };
export default Page;
