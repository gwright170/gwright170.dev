import { ReactNode } from 'react';
import classes from './FullHeightContainer.module.css';

const FullHeightContainer = ({ children }: { children: ReactNode }) => (
  <div className={classes['full-height-container']}>{children}</div>
);

export { FullHeightContainer };
