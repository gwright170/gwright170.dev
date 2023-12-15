import { Card as MantineCard, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './Card.module.css';

interface CardParams {
  title: string;
  content: JSX.Element;
  image: {
    path: string;
    alt: string;
  };
}

const Card = ({ title, content, image }: CardParams) => (
  <MantineCard className={classes['card']}>
    <div className={classes['title']}>
      <Image src={image.path} width={35} height={35} alt={image.alt} />
      <Title order={3}>{title}</Title>
    </div>
    {content}
  </MantineCard>
);

export { Card };
export type { CardParams };
