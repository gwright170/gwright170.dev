import logoDark from '@/public/logo/logo-dark.svg';
import logoLight from '@/public/logo/logo-light.svg';
import { Image } from '@mantine/core';
import NextImage from 'next/image';
import classes from './Logo.module.css';

const Logo = () => (
  <div className={classes['container']}>
    <Image
      component={NextImage}
      w="100%"
      h="auto"
      src={logoLight}
      alt="Logo"
      className={classes['light']}
    />
    <Image
      component={NextImage}
      w="100%"
      h="auto"
      src={logoDark}
      alt="Logo"
      className={classes['dark']}
    />
  </div>
);

export { Logo };
