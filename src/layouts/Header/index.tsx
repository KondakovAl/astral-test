import styles from './index.module.scss';

import { Button } from '../../components/Button';

import cn from 'classnames';

import Routes from '../../constants/Routes';
import { Link, useLocation } from 'react-router-dom';
import { ArrowIcon } from '../../assets/icons';

const Header = () => {
  const data = [
    { id: 1, name: 'main', link: Routes.main },
    { id: 2, name: 'cards', link: Routes.cards },
  ];
  const { pathname } = useLocation();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <Link to={Routes.main} className={styles.header__logo}>
            GlobalTalk
          </Link>
          <nav className={styles.header__nav}>
            {data.map((navItem: any) => (
              <Link
                to={navItem.link}
                key={navItem.id}
                className={cn(styles.header__nav_item, {
                  [styles.header__nav_item_active]: navItem.link === pathname,
                })}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>
        </div>

        <Button className={styles.header__login}>
          <span>Login</span> <ArrowIcon />
        </Button>
      </header>
    </>
  );
};

export { Header };
