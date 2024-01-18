import { sortedPostsData } from '@/static/sortedPostsData';
import { PostData } from '@/types/PostData';
import { Avatar, Container, Image, Text, Title } from '@mantine/core';
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
    <Container size="md">
      <article>
        {post.image && (
          <Image
            component={NextImage}
            src={post.image}
            radius="md"
            width={1920}
            height={300}
            alt={post.imageAlt ? post.imageAlt : 'Blog header image'}
            mb="sm"
          />
        )}
        <Avatar variant="filled" className={classes['avatar']}>
          <Image
            component={NextImage}
            src="/icons/dp.png"
            width={40}
            height={40}
            alt="Headshot of George Wright"
          />
        </Avatar>
        <Text c="dimmed" className={classes['metadata']}>
          {post.date}
          &nbsp;&#8226;&nbsp;
          <b>George Wright</b>
        </Text>
        <section>
          <Title className={classes['title']}>{post.title}</Title>
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
