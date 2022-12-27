import styles from './index.module.scss';

import { FC } from 'react';
import { Counter } from '../../../../components/Counter';

interface FeatureProps {
  feature: {
    name: string;
    count: number;
    icon: string;
  };
}

const Feature: FC<FeatureProps> = ({ feature }) => {
  return (
    <li className={styles.feature}>
      <div className={styles.feature__top}>
        <img
          src={feature.icon}
          alt={feature.name}
          className={styles.feature__img}
        />
        <div className={styles.feature__count}>
          <Counter
            val={feature.count}
            time={40}
            className={styles.feature__count_number}
          />
          <span className={styles.feature__count_plus}>+</span>
        </div>
      </div>
      <p className={styles.feature__text}>{feature.name}</p>
    </li>
  );
};

export { Feature };
