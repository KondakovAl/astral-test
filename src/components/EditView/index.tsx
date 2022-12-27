import styles from './index.module.scss';

import cn from 'classnames';

import { FC } from 'react';
import { Field } from '../Fields';
import { editViewType, IEditView, OptionsProps } from '../../types/types';

interface EditViewProps {
  className?: string;
  data: IEditView[];
  title: string;
  handleChange: (cell: editViewType, value: string | OptionsProps) => void;
}

const EditView: FC<EditViewProps> = ({
  className,
  data,
  handleChange,
  title,
}) => {
  return (
    <div className={cn(styles.view, className)}>
      <h2 className={styles.view__title}>{title}</h2>
      <div className={styles.view__info}>
        {data.map((item: IEditView) => (
          <Field item={item} key={item.id} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
};

export { EditView };
