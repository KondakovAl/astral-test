import styles from './index.module.scss';

import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../../assets/icons';

import { useSelector, useDispatch } from 'react-redux';

import Routes from '../../../../constants/Routes';
import { RootState } from '../../../../store/store';
import { logOut } from '../../../../store/authSlice';
import { Button } from '../../../../components/Button';
import { setPage } from '../../../../store/paginationSlice';

const AuthBlock = () => {
  const { isAuth, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={styles.auth}>
      {!isAuth ? (
        <Link to={Routes.login}>
          <Button className={styles.auth__login}>
            <span>Login</span> <ArrowIcon />
          </Button>
        </Link>
      ) : (
        <>
          <div className={styles.auth__user}>
            <span className={styles.auth__user_circle}>{user?.charAt(0)}</span>
            <span className={styles.auth__user_name}>{user}</span>
          </div>
          <Button
            className={styles.auth__logout}
            onClick={() => {
              dispatch(logOut());
              dispatch(setPage(1));
            }}
          >
            <span>Sing Out</span> <ArrowIcon />
          </Button>
        </>
      )}
    </div>
  );
};

export { AuthBlock };
