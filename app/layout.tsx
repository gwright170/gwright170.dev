import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import { Header } from '../components/organisms/Header/Header';
import { resolver, theme } from '../theme';
import './globals.css';

export const metadata = {
  title: 'George Wright | Software Engineer',
  description: 'George Wright is a Software Engineer based in London, UK.',
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
