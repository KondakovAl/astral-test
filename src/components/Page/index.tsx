import styles from './index.module.scss';

import cn from 'classnames';

interface LayoutProps {
  children: React.ReactNode;
  className: string;
}

const Page = ({ children, className }: LayoutProps) => {
  return (
    <div className={cn(styles.page, className)}>
      <div className={styles.page__wrapper}>{children}</div>
    </div>
  );
};

export { Page };
