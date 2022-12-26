import styles from './index.module.scss';

import { Page } from '../../components/Page';
import { Header } from '../../layouts/Header';
import { Body } from '../../components/Body';
import { CardList } from '../../components/CardList';
import { mock } from '../../mock/mock';
import { Pagination } from '../../layouts/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CardsPage = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { limit } = useSelector((state: RootState) => state.pagination);

  return (
    <Page className={styles.page}>
      <Header />
      <Body className={styles.page__body}>
        {isAuth ? (
          <>
            <CardList cards={mock.cards} />
            <Pagination />
          </>
        ) : (
          <CardList
            cards={mock.cards.slice(0, limit)}
            className={styles.page__list_denied}
          />
        )}
      </Body>
    </Page>
  );
};

export { CardsPage };
