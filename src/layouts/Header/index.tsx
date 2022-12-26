import styles from './index.module.scss';

import cn from 'classnames';

import Routes from '../../constants/Routes';
import { Link, useLocation } from 'react-router-dom';

import { AuthBlock } from './sections/AuthBlock';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header = () => {
  const data = [
    { id: 1, name: 'main', link: Routes.main, needAccess: false },
    { id: 2, name: 'cards', link: Routes.cards, needAccess: false },
    { id: 3, name: 'profile', link: Routes.profile, needAccess: true },
  ];
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to={Routes.main} className={styles.header__logo}>
          GlobalTalk
        </Link>
        <nav className={styles.header__nav}>
          {data.slice(0, 3).map((navItem: any) => (
            <>
              {(!navItem.needAccess || isAuth) && (
                <Link
                  to={navItem.link}
                  key={navItem.id}
                  className={cn(styles.header__nav_item, {
                    [styles.header__nav_item_active]: navItem.link === pathname,
                  })}
                >
                  {navItem.name}
                </Link>
              )}
            </>
          ))}
        </nav>
      </div>
      <AuthBlock />
    </header>
  );
};

export { Header };
