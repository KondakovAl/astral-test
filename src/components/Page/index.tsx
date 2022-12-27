import styles from './index.module.scss';

import cn from 'classnames';

interface PageProps {
  children: React.ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  return (
    <div className={cn(styles.page, className)}>
      <div className={styles.page__wrapper}>{children}</div>
    </div>
  );
};

export { Page };
