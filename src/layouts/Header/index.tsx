import styles from './index.module.scss';

import Routes from '../../constants/Routes';
import { Link } from 'react-router-dom';

import { AuthBlock } from './sections/AuthBlock';

import { Navigation } from '../../components/Navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to={Routes.main} className={styles.header__logo}>
          GlobalTalk
        </Link>
        <Navigation />
      </div>
      <AuthBlock />
    </header>
  );
};

export { Header };
