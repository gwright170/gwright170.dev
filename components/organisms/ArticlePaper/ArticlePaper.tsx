import { Paper, Text, Title } from '@mantine/core';
import Link from 'next/link';
import { PostData } from '../../../types/PostData';
import classes from './ArticlePaper.module.css';

const ArticlePaper = ({ post }: { post: PostData }) => {
  const { id } = post;

  return (
    <Link href={id}>
      <Paper withBorder radius="md" className={classes.card}>
        <Title order={3}>{post.title}</Title>
        <Text mt="sm" c="dimmed">
          {post.excerpt}
        </Text>
        <Text mt="sm">{post.date}</Text>
      </Paper>
    </Link>
  );
};

export { ArticlePaper };
