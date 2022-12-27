import styles from './index.module.scss';

import cn from 'classnames';

import { FC, useEffect, useState } from 'react';
import { ICard } from '../../types/types';
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(true);
  const [isAnswerHidden, setIsAnswerHidden] = useState<boolean>(true);

  const { page } = useSelector((state: RootState) => state.pagination);
  const { isAuth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuth) {
      setIsAnswerHidden(true);
      setIsFlipped(false);
      setTimeout(() => {
        setIsFlipped(false);
      }, 700);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      {card.word && (
        <li className={cn(styles.card, { [styles.card_flipped]: isFlipped })}>
          <div className={cn(styles.card__face, styles.card__face_front)}>
            {card.unique === 'true' && (
              <h3 className={styles.card__title}>Word Of the Day</h3>
            )}
            <span className={styles.card__word}>{card.word.trim()}</span>
            <p className={styles.card__meaning}>{card.meaning}</p>
            <Button
              onClick={() => {
                if (isAuth) {
                  setIsFlipped(true);
                  setIsAnswerHidden(false);
                }
              }}
            >
              Translation
            </Button>
          </div>
          <div className={cn(styles.card__face, styles.card__face_back)}>
            {isAnswerHidden ? (
              <span className={styles.card__word}>?</span>
            ) : (
              <>
                <span className={styles.card__word}>
                  {card.translation.trim()}
                </span>
                <Button onClick={() => isAuth && setIsFlipped(false)}>
                  Go back
                </Button>
              </>
            )}
          </div>
        </li>
      )}
    </>
  );
};

export { Card };
