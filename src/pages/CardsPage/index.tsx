import styles from './index.module.scss';

import { Page } from '../../components/Page';
import { Header } from '../../layouts/Header';

const CardsPage = () => {
  return (
    <Page className={styles.page}>
      <Header />
    </Page>
  );
};

export { CardsPage };
