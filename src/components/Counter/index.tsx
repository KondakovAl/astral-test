import { FC, useEffect, useState } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';

interface CounterProps {
  val: number;
  time: number;
  className?: string;
}

const Counter: FC<CounterProps> = ({ val, time, className }) => {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    currVal !== val && setTimeout(setCurrVal, time, currVal + 1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currVal]);

  return <span className={cn(styles.counter, className)}>{currVal}</span>;
};

export { Counter };
