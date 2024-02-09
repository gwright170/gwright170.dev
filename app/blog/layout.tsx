import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Engineering Blog',
  keywords: 'George Wright, Software Engineer, Front-end, Full-stack, Blog',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/blog',
    title: 'Software Engineering Blog | George Wright',
    siteName: 'gwright170.dev',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
