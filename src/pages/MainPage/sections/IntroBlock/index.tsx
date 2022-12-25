import styles from './index.module.scss';

import { FC } from 'react';
import { Feature } from '../Feature';

interface IntroBlockProps {
  data: {
    title: string;
    quote: string;
    text: string;
    features: {
      name: string;
      count: number;
      icon: string;
    }[];
  };
}

const IntroBlock: FC<IntroBlockProps> = ({ data }) => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.intro__title}>{data.title}</h1>
      <p className={styles.intro__quote}>{data.quote}</p>
      <p className={styles.intro__text}>{data.text}</p>
      <ul className={styles.intro__features}>
        {data.features.map((feature: any, index: number) => (
          <Feature feature={feature} key={index} />
        ))}
      </ul>
    </div>
  );
};

export { IntroBlock };
