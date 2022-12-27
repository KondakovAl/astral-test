import styles from './index.module.scss';

import { LoginForm } from '../../layouts/LoginForm';

import { Body } from '../../components/Body';

const LoginPage = () => {
  return (
    <Body className={styles.page__body}>
      <LoginForm />
    </Body>
  );
};

export { LoginPage };
