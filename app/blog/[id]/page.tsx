import { Container, Text, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';
import { sortedPostsData } from '../../../blog/sortedPostsData';
import { PostData } from '../../../types/PostData';
import classes from './blogpost.module.css';

const generateStaticParams = () => sortedPostsData.sorted;

const Page = ({ params }: { params: PostData }) => {
  const { id } = params;
  const post = sortedPostsData.posts[id];

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
        <section>
          <Markdown>{post.content}</Markdown>
        </section>
      </div>
    </Container>
  );
};

export { generateStaticParams };
export default Page;
