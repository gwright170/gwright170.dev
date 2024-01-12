export const metadata = {
  title: 'Software Engineering Blog',
  description:
    'George Wright (@gwright170) is a Software Engineer based in London, UK.',
  creator: 'George Wright',
  publisher: 'George Wright',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://gright170.dev/blog',
    title: 'Software Engineering Blog | George Wright',
    siteName: 'gwright170.dev',
    images: '/icons/dp.png',
  },
};

const Page = ({ children }: { children: React.ReactNode }) => children;

export default Page;
