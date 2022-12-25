import styles from './index.module.scss';

import { FC } from 'react';

interface AboutBlockProps {}

const AboutBlock: FC<AboutBlockProps> = ({}) => {
  return <div className={styles.about}></div>;
};

export { AboutBlock };
