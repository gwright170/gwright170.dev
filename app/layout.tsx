import { Header } from '@/components/molecules/Header';
import { resolver, theme } from '@/theme';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | George Wright',
    default: 'Front-end / Full-stack Software Engineer | George Wright',
  },
  description:
    'George Wright (@gwright170) is a Software Engineer based in London, UK.',
  creator: 'George Wright',
  publisher: 'George Wright',
  robots: 'index, follow',
  keywords: 'George Wright, Software Engineer, Front-end, Full-stack',
  openGraph: {
    type: 'website',
    url: 'https://gright170.dev/',
    title: 'Front-end / Full-stack Software Engineer | George Wright',
    siteName: 'gwright170.dev',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} cssVariablesResolver={resolver}>
          <Header />
          <main>{children}</main>
          <Analytics />
          <SpeedInsights />
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
