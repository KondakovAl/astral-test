import styles from './index.module.scss';

import { FC } from 'react';
import { editViewType, IEditView, OptionsProps } from '../../types/types';

import cn from 'classnames';

interface FieldProps {
  item: IEditView;
  handleChange: (cell: editViewType, value: string | OptionsProps) => void;
}

const Field: FC<FieldProps> = ({ item, handleChange }) => {
  return (
    <>
      {item.type !== 'checkbox' && (
        <label className={styles.field}>
          <span className={styles.field__name}>{item.name}:</span>
          {item.type !== 'select' &&
            item.type !== 'radio' &&
            item.type !== 'range' &&
            item.type !== 'checkbox' && (
              <input
                className={styles.field__input}
                value={item.value}
                type={item.type}
                onChange={(evt) => handleChange(item.name, evt.target.value)}
              />
            )}
          {item.type === 'select' && (
            <div className={styles.field__select}>
              <select
                className={cn(styles.field__input)}
                value={item.value}
                onChange={(evt) => handleChange(item.name, evt.target.value)}
              >
                {item.options?.map((el: OptionsProps) => (
                  <option value={el.value} key={el.id}>
                    {el.value}
                  </option>
                ))}
              </select>
            </div>
          )}
          {item.type === 'radio' && (
            <>
              {item.options?.map((el: OptionsProps) => (
                <label className={styles.field__radio} key={el.id}>
                  <span>{el.value}</span>
                  <input
                    className={styles.field__radio_real}
                    value={el.value}
                    name={item.name}
                    type={item.type}
                    checked={el.value === item.value}
                    onChange={(evt) =>
                      handleChange(item.name, evt.target.value)
                    }
                  />
                  <span className={styles.field__radio_custom} />
                </label>
              ))}
            </>
          )}
          {item.type === 'range' && (
            <div className={styles.field__range}>
              <div className={styles.field__range_top}>
                <span className={styles.field__range_min}>{item.min}</span>
                <span className={styles.field__range_value}>{item.value}</span>
                <span className={styles.field__range_max}>{item.max}</span>
              </div>
              <input
                className={styles.field__range_input}
                value={item.value}
                type={item.type}
                min={item.min}
                max={item.max}
                step={item.step}
                disabled={item.disabled}
                onChange={(evt) => handleChange(item.name, evt.target.value)}
              />
            </div>
          )}
        </label>
      )}
      {item.type === 'checkbox' && (
        <div className={styles.field}>
          <>
            <span className={styles.field__name}>{item.name}:</span>
            {item.options?.map((el: OptionsProps) => (
              <label
                className={cn(styles.field__checkbox, {
                  [styles.field__checkbox_disabled]: el.disabled,
                })}
                key={el.id}
              >
                <span className={styles.field__checkbox_title}>{el.value}</span>
                <input
                  className={styles.field__checkbox_real}
                  name={item.name}
                  type={item.type}
                  checked={el.checked}
                  disabled={el.disabled}
                  onChange={() => handleChange(item.name, el)}
                />
                <span className={styles.field__checkbox_custom} />
              </label>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export { Field };
