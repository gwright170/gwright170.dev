import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Projects',
  keywords:
    'George Wright, gwright170, Software Engineer, Front-End, Staff, Projects',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/projects',
    title: 'Personal Projects | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
