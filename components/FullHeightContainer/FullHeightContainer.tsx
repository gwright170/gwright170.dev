import { Container, MantineSpacing, StyleProp } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({
  background,
  my,
  children,
}: {
  background: string;
  my?: StyleProp<MantineSpacing>;
  children: ReactNode;
}) => (
  <div className={background}>
    <Container my={my} className={classes['full-height-container']}>
      <div className={classes.content}>{children}</div>
    </Container>
  </div>
);

export { FullHeightContainer };
