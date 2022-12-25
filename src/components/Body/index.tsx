import styles from './index.module.scss';

import { FC } from 'react';

import cn from 'classnames';

interface BodyProps {
  children: React.ReactNode;
  className?: string;
}

const Body: FC<BodyProps> = ({ children, className }) => {
  return <section className={cn(styles.body, className)}>{children}</section>;
};

export { Body };
