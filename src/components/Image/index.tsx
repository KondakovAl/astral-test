import styles from './index.module.scss';

import cn from 'classnames';

import { FC } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <img src={src} alt={alt} className={styles.container__image} />
    </div>
  );
};

export { Image };
