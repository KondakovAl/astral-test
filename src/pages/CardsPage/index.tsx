import styles from './index.module.scss';

import { Page } from '../../components/Page';
import { Header } from '../../layouts/Header';
import { Body } from '../../components/Body';
import { CardList } from '../../components/CardList';
import { mock } from '../../mock/mock';
import { Pagination } from '../../layouts/Pagination';

const CardsPage = () => {
  return (
    <Page className={styles.page}>
      <Header />
      <Body className={styles.page__body}>
        <CardList cards={mock.cards} />
        <Pagination />
      </Body>
    </Page>
  );
};

export { CardsPage };
