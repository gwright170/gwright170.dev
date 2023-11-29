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
    '--g170-skyscanner-blue': '#0770E3',
    '--g170-dazn-black': '#000000',
    '--g170-cgi-red': '#FF0033',
    '--g170-oceanwise-blue': '#00327E',
  },
  light: {},
  dark: {},
});
