import { Metadata } from 'next';

const generateMetadata = (): Metadata => ({
  title: 'Personal Projects',
  /*openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },*/
});

const Page = ({ children }: { children: React.ReactNode }) => children;

export { generateMetadata };
export default Page;
