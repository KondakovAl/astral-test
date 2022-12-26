import { FC } from 'react';
import { NextIcon, PrevIcon } from '../../assets/icons';
import styles from './index.module.scss';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../store/paginationSlice';
import { RootState } from '../../store/store';

interface PaginationProps {
  // totalCount: number;
  // limit: number;
  // page: number;
  // setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = () => {
  const { page, totalCount, limit } = useSelector(
    (state: RootState) => state.pagination
  );
  const dispatch = useDispatch();

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className={cn(styles.pagination)}>
      <div className={styles.pagination__wrapper}>
        <PrevIcon
          className={cn(
            styles.pagination__item,
            styles.pagination__item_arrow,
            {
              [styles.pagination__item_disabled]: page === 1,
            }
          )}
          onClick={() => page !== 1 && dispatch(setPage(page - 1))}
        />
        {[...Array(totalPages)].map((_, i: number) => (
          <button
            className={cn(styles.pagination__item, {
              [styles.pagination__item_active]: page === i + 1,
            })}
            onClick={() => dispatch(setPage(i + 1))}
            key={i}
          >
            {i + 1}
          </button>
        ))}
        <NextIcon
          className={cn(
            styles.pagination__item,
            styles.pagination__item_arrow,
            {
              [styles.pagination__item_disabled]: page === totalPages,
            }
          )}
          onClick={() => page !== totalPages && dispatch(setPage(page + 1))}
        />
      </div>
    </div>
  );
};

export { Pagination };
