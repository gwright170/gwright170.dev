import { Container, MantineSize } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({
  size,
  children,
}: {
  size: MantineSize;
  children: ReactNode;
}) => (
  <Container size={size} my="md" className={classes['full-height-container']}>
    <div className={classes['content']}>{children}</div>
  </Container>
);

export { FullHeightContainer };
