import styles from './index.module.scss';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { Loader };
