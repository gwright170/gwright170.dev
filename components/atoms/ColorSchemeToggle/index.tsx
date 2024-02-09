'use client';

import {
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import cx from 'clsx';
import Image from 'next/image';
import classes from './ColorSchemeToggle.module.css';

const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <UnstyledButton
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <Image
        className={cx(classes['icon'], classes['light'])}
        src={'/icons/full-moon.png'}
        width={35}
        height={35}
        alt={'Toggle light mode'}
      />
      <Image
        className={cx(classes['icon'], classes['dark'])}
        src={'/icons/new-moon.png'}
        width={35}
        height={35}
        alt={'Toggle dark mode'}
      />
    </UnstyledButton>
  );
};

export { ColorSchemeToggle };
