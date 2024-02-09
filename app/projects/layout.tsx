import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Projects',
  keywords: 'George Wright, Software Engineer, Front-end, Full-stack, Projects',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/projects',
    title: 'Personal Projects | George Wright',
    siteName: 'gwright170.dev',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
