'use client';

import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  other: {
    menuHeight: rem(96),
    logoWidth: rem(160),
  },
});

export const resolver: CSSVariablesResolver = theme => ({
  variables: {
    '--g170-menu-height': theme.other.menuHeight,
    '--g170-logo-width': theme.other.logoWidth,
  },
  light: {},
  dark: {},
});
