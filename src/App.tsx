import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Path from './constants/Routes';

import './assets/scss/index.scss';

import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { CardsPage } from './pages/CardsPage';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { useEffect, useState } from 'react';
import { setCredentials } from './store/authSlice';
import { Page } from './components/Page';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { fetchCards } from './store/cardsSlice';

const App = () => {
  const { user, isAuth } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    const savedAuth = JSON.parse(localStorage.getItem('auth') || '{}');
    dispatch(setCredentials(savedAuth));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate(Path.main);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Page>
      <Header />
      <Routes>
        <Route path={Path.main} element={<MainPage />} />
        <Route path={Path.cards} element={<CardsPage />} />
        {!isAuth && <Route path={Path.login} element={<LoginPage />} />}
        {isAuth && <Route path={Path.profile} element={<ProfilePage />} />}
        <Route path='*' element={<Navigate to={Path.main} replace />} />
      </Routes>
      <Footer />
    </Page>
  );
};

export default App;
