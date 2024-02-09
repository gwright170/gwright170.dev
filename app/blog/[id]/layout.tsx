import { sortedPostsData } from '@/static/sortedPostsData';
import { PostData } from '@/types/PostData';
import { Metadata } from 'next';
import Page from './page';

const generateMetadata = ({ params }: { params: PostData }): Metadata => {
  const post = sortedPostsData.posts[params.id];
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'website',
      url: `https://gwright170.dev/blog/${post.id}`,
      title: `${post.title} | George Wright (@gwright170)`,
      siteName: 'gwright170.dev',
      images: [
        {
          // won't work if post does not have an image
          url: `https://gwright170.dev${post.image}`,
          width: 1200,
          height: 620,
        },
      ],
    },
  };
};

export { generateMetadata };
export default Page;
