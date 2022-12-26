import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Path from './constants/Routes';

import './assets/scss/index.scss';

import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { CardsPage } from './pages/CardsPage';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useEffect } from 'react';

const App = () => {
  const { user, isAuth, token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(Path.main);
    }
  }, [user]);

  useEffect(() => {
    console.log(user, isAuth, token);
  }, [user, isAuth, token]);

  return (
    <Routes>
      <Route path={Path.main} element={<MainPage />} />
      <Route path={Path.cards} element={<CardsPage />} />
      {!isAuth && <Route path={Path.login} element={<LoginPage />} />}
      {isAuth && <Route path={Path.profile} element={<ProfilePage />} />}
      <Route path='*' element={<Navigate to={Path.main} replace />} />
    </Routes>
  );
};

export default App;
