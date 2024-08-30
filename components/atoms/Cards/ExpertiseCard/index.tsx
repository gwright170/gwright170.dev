import { ExpertiseCardParams } from '@/types/ExpertiseCardParams';
import { Paper, Title } from '@mantine/core';
import classes from './Card.module.css';

const ExpertiseCard = ({ title, content }: ExpertiseCardParams) => (
  <Paper withBorder radius="md" className={classes['card']}>
    <div className={classes['title']}>
      <Title order={3}>{title}</Title>
    </div>
    <div className={classes['content']}>{content}</div>
  </Paper>
);

export { ExpertiseCard };
