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
    template: '%s | George Wright (@gwright170)',
    default: 'Front-End Staff Software Engineer | George Wright (@gwright170)',
  },
  description:
    'George Wright (@gwright170) is a Software Engineer based in London, UK.',
  creator: 'George Wright (@gwright170)',
  publisher: 'George Wright (@gwright170)',
  robots: 'index, follow',
  keywords: 'George Wright, gwright170, Software Engineer, Front-End, Staff',
  openGraph: {
    type: 'website',
    url: 'https://gwright170.dev/',
    title: 'Front-End Staff Software Engineer | George Wright (@gwright170)',
    siteName: 'gwright170.dev',
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
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
