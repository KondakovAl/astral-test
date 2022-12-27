import styles from './index.module.scss';

import { FC, useEffect } from 'react';
import { ICard } from '../../types/types';
import { Card } from '../Card';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setTotalCount } from '../../store/paginationSlice';

import cn from 'classnames';

interface CardListProps {
  cards: ICard[];
  className?: string;
}

const CardList: FC<CardListProps> = ({ cards, className }) => {
  const { page, limit } = useSelector((state: RootState) => state.pagination);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTotalCount(cards.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const indexOfLast = page * limit;
  const indexOfFirst = indexOfLast - limit;

  return (
    <ul className={cn(styles.list, className)}>
      {cards.slice(indexOfFirst, indexOfLast).map((card: ICard) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
};

export { CardList };
