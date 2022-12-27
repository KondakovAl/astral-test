import styles from './index.module.scss';

import { Navigation } from '../../components/Navigation';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navigation className={styles.footer__nav} component='footer' />
      <span className={styles.footer__copyrights}>
        ©2022 KondakovAl. TestTask for Astal.
      </span>
    </footer>
  );
};

export { Footer };
