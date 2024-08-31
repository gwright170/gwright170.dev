import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shaka Player Integration',
  keywords:
    'George Wright, gwright170, Software Engineer, Front-End, Staff, Projects',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/projects/shaka',
    title: 'Shaka Player Integration | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
