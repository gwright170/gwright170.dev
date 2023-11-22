import { Card, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './ExpertiseCard.module.css';

interface ExpertiseCardParams {
  title: string;
  content: JSX.Element;
  image: {
    path: string;
    alt: string;
  };
}

const ExpertiseCard = ({ title, content, image }: ExpertiseCardParams) => (
  <Card shadow="sm" padding="lg" radius={0} withBorder>
    <div className={classes['title']}>
      <Image src={image.path} width={35} height={35} alt={image.alt} />
      <Title order={3}>{title}</Title>
    </div>
    {content}
  </Card>
);

export { ExpertiseCard };
export type { ExpertiseCardParams };
