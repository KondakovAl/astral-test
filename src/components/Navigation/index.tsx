import styles from './index.module.scss';

import cn from 'classnames';

import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Link, useLocation } from 'react-router-dom';
import { mock } from '../../mock/mock';
import { INavigation } from '../../types/types';

interface NavigationProps {
  className?: string;
  component?: 'footer' | 'header';
}

const Navigation: FC<NavigationProps> = ({ className, component }) => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return (
    <nav className={cn(styles.nav, className)}>
      {mock.navigation.map((navItem: INavigation) => (
        <React.Fragment key={navItem.id}>
          {(!navItem.needAccess || isAuth) && (
            <Link
              to={navItem.link}
              className={cn(styles.nav__item, {
                [styles.nav__item_active]:
                  navItem.link === pathname && component !== 'footer',
              })}
            >
              {navItem.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export { Navigation };
