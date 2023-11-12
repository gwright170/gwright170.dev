import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({ children }: { children: ReactNode }) => (
  <div className={classes['full-height-container']}>
    <div className={classes.content}>{children}</div>
  </div>
);

export { FullHeightContainer };
