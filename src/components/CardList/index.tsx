import styles from './index.module.scss';

import { FC, useEffect } from 'react';
import { ICard } from '../../types/types';
import { Card } from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setTotalCount } from '../../store/paginationSlice';

interface CardListProps {
  cards: ICard[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
  const { page, limit } = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalCount(cards.length));
  }, []);

  const indexOfLast = page * limit;
  const indexOfFirst = indexOfLast - limit;

  return (
    <ul className={styles.list}>
      {cards.slice(indexOfFirst, indexOfLast).map((card: ICard) => (
        <Card card={card} />
      ))}
    </ul>
  );
};

export { CardList };
