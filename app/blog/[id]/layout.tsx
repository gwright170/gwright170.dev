import { sortedPostsData } from '@/static/sortedPostsData';
import { PostData } from '@/types/PostData';
import { Metadata } from 'next';
import Page from './page';

const generateMetadata = ({ params }: { params: PostData }): Metadata => {
  const post = sortedPostsData.posts[params.id];
  return {
    title: post.title,
    description: post.excerpt,
    creator: 'George Wright',
    publisher: 'George Wright',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: `https://gright170.dev/blog/${params.id}`,
      title: `${post.title} | George Wright`,
      siteName: 'gwright170.dev',
      images: sortedPostsData.posts[params.id].image,
    },
  };
};

export { generateMetadata };
export default Page;
