import styles from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Page = ({ children }: LayoutProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.page__wrapper}>{children}</div>
    </div>
  );
};

export { Page };
