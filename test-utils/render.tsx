import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';
import { theme } from '../theme';

const render = (ui: React.ReactNode) => {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={theme}>{children}</MantineProvider>
    ),
  });
};

export { render };
