import styles from './index.module.scss';

import { Body } from '../../components/Body';
import { CardList } from '../../components/CardList';
import { Pagination } from '../../layouts/Pagination';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Loader } from '../../components/Loader';

const CardsPage = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { limit } = useSelector((state: RootState) => state.pagination);

  const { data: cards, status } = useSelector(
    (state: RootState) => state.cards
  );

  return (
    <Body className={styles.page__body}>
      {status === 'loading' && <Loader />}
      {status === 'resolved' && (
        <>
          {isAuth ? (
            <>
              <CardList cards={cards} />
              <Pagination />
            </>
          ) : (
            <CardList
              cards={cards.slice(0, limit)}
              className={styles.page__list_denied}
            />
          )}
        </>
      )}
    </Body>
  );
};

export { CardsPage };
