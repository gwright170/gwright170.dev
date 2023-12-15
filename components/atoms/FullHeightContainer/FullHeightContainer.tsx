import { Container, MantineSize } from '@mantine/core';
import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({
  background,
  size,
  children,
}: {
  background: string;
  size: MantineSize;
  children: ReactNode;
}) => (
  <div className={background}>
    <Container size={size} my="md" className={classes['full-height-container']}>
      <div className={classes['content']}>{children}</div>
    </Container>
  </div>
);

export { FullHeightContainer };
