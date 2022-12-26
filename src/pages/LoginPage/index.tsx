import styles from './index.module.scss';

import { Page } from '../../components/Page';
import { LoginForm } from '../../layouts/LoginForm';
import { Header } from '../../layouts/Header';
import { Body } from '../../components/Body';

const LoginPage = () => {
  return (
    <Page className={styles.page}>
      <Header />
      <Body className={styles.page__body}>
        <LoginForm />
      </Body>
    </Page>
  );
};

export { LoginPage };
