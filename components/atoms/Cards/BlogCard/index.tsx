import { PostData } from '@/types/PostData';
import { Paper, Text, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import classes from './BlogCard.module.css';

const BlogCard = ({
  post,
  includeDetails = true,
}: {
  post: PostData;
  includeDetails?: boolean;
}) => {
  const { id } = post;

  return (
    <Link href={`/blog/${id}`}>
      <Paper withBorder radius="md" className={classes['card']}>
        <Title order={4}>{post.title}</Title>
        {includeDetails && (
          <>
            <Markdown>{post.excerpt}</Markdown>
            <Text mt="sm">{post.date}</Text>
          </>
        )}
      </Paper>
    </Link>
  );
};

export { BlogCard };
