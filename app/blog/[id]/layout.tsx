import { Metadata } from 'next';
import { sortedPostsData } from '../../../blog/sortedPostsData';
import { PostData } from '../../../types/PostData';
import Page from './page';

const generateMetadata = ({ params }: { params: PostData }): Metadata => {
  return {
    title: `${sortedPostsData.posts[params.id].title} | George Wright`,
    /*openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },*/
  };
};

export { generateMetadata };
export default Page;
