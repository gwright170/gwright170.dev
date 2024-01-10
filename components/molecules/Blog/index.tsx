import { BlogCard } from '@/components/atoms/Cards/BlogCard';
import { sortedPostsData } from '@/static/sortedPostsData';
import { Text } from '@mantine/core';

interface BlogProps {
  limit?: number;
}

const { sorted } = sortedPostsData;

const Blog = ({ limit }: BlogProps) => {
  const posts = limit ? sorted.slice(0, limit) : sorted;

  if (posts.length === 0)
    return (
      <section>
        <Text c="dimmed" style={{ textAlign: 'center' }}>
          There&apos;s nothing here yet...
        </Text>
      </section>
    );

  return posts.map(post => (
    <article key={post.id}>
      <BlogCard post={post} />
    </article>
  ));
};

export { Blog };
