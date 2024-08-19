import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Engineering Blog',
  keywords:
    'George Wright, gwright170, Software Engineer, Front-End, Staff, Blog',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/blog',
    title: 'Software Engineering Blog | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
