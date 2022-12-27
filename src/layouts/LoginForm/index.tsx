import { FC, useState } from 'react';

import styles from './index.module.scss';

import cn from 'classnames';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Form, Formik, FormikErrors } from 'formik';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import Routes from '../../constants/Routes';

interface FormProps {
  className?: string;
}

export interface FormValues {
  login: string;
  password: string;
}

const LoginForm: FC<FormProps> = ({ className }) => {
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.login) {
      errors.login = 'Required';
    } else if (values.login.length < 5) {
      errors.login = 'Too short';
    } else if (values.login.length > 15) {
      errors.login = 'Too long';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  };
  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
      }}
      validateOnChange
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if (values.login === 'admin' && values.password === 'admin') {
          dispatch(
            setCredentials({
              user: 'alex',
              token: 'c76fb018-27c9-43f7-a751-62646eda7e1a-1',
            })
          );
          setError('');
          resetForm();
          navigate(Routes.main);
        } else {
          setError('Incorrect login or password!');
        }
      }}
    >
      <>
        <Form className={cn(styles.form, className)}>
          <h2 className={styles.form__title}>Sing In</h2>
          <Input
            name={'login'}
            type={'text'}
            placeholder={'login'}
            setError={setError}
          />
          <Input
            name={'password'}
            type={'text'}
            placeholder={'password'}
            setError={setError}
          />
          <Button type='submit' className={styles.form__button}>
            Login
          </Button>
          {error && <div className={styles.form__error}>{error}</div>}
        </Form>
      </>
    </Formik>
  );
};

export { LoginForm };
