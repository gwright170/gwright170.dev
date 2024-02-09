import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';
import { Card as MantineCard, Title } from '@mantine/core';
import Image from 'next/image';
import classes from './Card.module.css';

const ExpertiseCard = ({ title, content, image }: ExpertiseCardParams) => (
  <MantineCard className={classes['card']}>
    <div className={classes['title']}>
      <Image src={image.path} width={35} height={35} alt={image.alt} />
      <Title order={4}>{title}</Title>
    </div>
    <div className={classes['content']}>{content}</div>
  </MantineCard>
);

export { ExpertiseCard };
