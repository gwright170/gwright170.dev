'use client';

import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  other: {
    menuHeight: rem(96),
    logoWidth: rem(160),
  },
  shadows: {
    sm: '0px 0px 10px 2px rgba(0,0,0,0.1)',
    md: '0px 0px 15px 3px rgba(0,0,0,0.1)',
    lg: '0px 0px 20px 4px rgba(0,0,0,0.12)',
    xl: '0px 0px 30px 6px rgba(0,0,0,0.14)',
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
    '--g170-container-dark': 'rgb(42, 42, 42)',
    '--g170-container-hover': '#ffffff1f',
  },
  light: {},
  dark: {},
});
