import { sortedPostsData } from '@/static/sortedPostsData';
import { PostData } from '@/types/PostData';
import { Container, Image, Text, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import classes from './blogpost.module.css';

const generateStaticParams = () => sortedPostsData.sorted;

const Page = ({ params }: { params: PostData }) => {
  const { id } = params;
  const post = sortedPostsData.posts[id];

  if (!post) return notFound();

  return (
    <Container size="sm">
      <article>
        {post.image && (
          <Image
            component={NextImage}
            src={post.image}
            radius="md"
            width={1920}
            height={300}
            alt={post.imageAlt ? post.imageAlt : 'Blog header image'}
          />
        )}
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
        <section>
          <Markdown>{post.content}</Markdown>
        </section>
      </article>
    </Container>
  );
};

export { generateStaticParams };
export default Page;
