import { PostData } from '@/types/PostData';
import { Paper, Text, Title } from '@mantine/core';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import classes from './ArticlePaper.module.css';

const ArticlePaper = ({ post }: { post: PostData }) => {
  const { id } = post;

  return (
    <Link href={`/blog/${id}`}>
      <Paper withBorder radius="md" className={classes.card}>
        <Title order={3}>{post.title}</Title>
        <Markdown className={classes['dimmed-text']}>{post.excerpt}</Markdown>
        <Text mt="sm">{post.date}</Text>
      </Paper>
    </Link>
  );
};

export { ArticlePaper };
