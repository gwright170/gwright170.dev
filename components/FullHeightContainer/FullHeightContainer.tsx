import { Container, MantineSpacing, StyleProp } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({
  my,
  children,
}: {
  my?: StyleProp<MantineSpacing>;
  children: ReactNode;
}) => (
  <Container my={my} className={classes['full-height-container']}>
    <div className={classes.content}>{children}</div>
  </Container>
);

export { FullHeightContainer };
