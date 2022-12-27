import styles from './index.module.scss';

import { Body } from '../../components/Body';
import { EditView } from '../../components/EditView';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
  setAge,
  setBirthDate,
  setBirthTime,
  setCompetence,
  setCountry,
  setEmail,
  setEmployee,
  setFirstName,
  setGreeting,
  setHobby,
  setLastName,
  setSalary,
  setTel,
} from '../../store/editViewSlice';
import { editViewType } from '../../types/types';

const ProfilePage = () => {
  const data = useSelector((state: RootState) => state.editView.data);
  const dispatch = useDispatch();

  const handleChange = (cell: editViewType, value: any) => {
    const changeData = {
      firstName: setFirstName(value),
      lastName: setLastName(value),
      email: setEmail(value),
      age: setAge(value),
      tel: setTel(value),
      birthDate: setBirthDate(value),
      birthTime: setBirthTime(value),
      hobby: setHobby(value),
      country: setCountry(value),
      greeting: setGreeting(value),
      employee: setEmployee(value),
      salary: setSalary(value),
      competence: setCompetence(value),
    };
    dispatch(changeData[cell]);
  };
  return (
    <Body className={styles.page__body}>
      <EditView
        data={data.slice(0, 10)}
        handleChange={handleChange}
        title={'Personal Info'}
        className={styles.page__view_personal}
      />
      <EditView
        data={data.slice(10)}
        handleChange={handleChange}
        title={'Professional Info'}
        className={styles.page__view_professional}
      />
    </Body>
  );
};

export { ProfilePage };
