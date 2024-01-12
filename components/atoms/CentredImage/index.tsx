import { Image } from '@mantine/core';
import NextImage from 'next/image';
import { ReactNode } from 'react';
import classes from './CentredImage.module.css';

interface CenteredImageParams {
  src: unknown;
  alt: string;
  attribution: ReactNode;
  width?: string;
}

const CentredImage = ({
  src,
  alt,
  attribution,
  width,
}: CenteredImageParams) => (
  <div>
    <Image
      component={NextImage}
      w={width || '100%'}
      h="auto"
      src={src}
      alt={alt}
      className={classes['image']}
    />
    <div className={classes['attribution']}>{attribution}</div>
  </div>
);

export { CentredImage };
