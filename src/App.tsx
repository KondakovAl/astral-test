import { Routes, Route, Navigate } from 'react-router-dom';
import Path from './constants/Routes';

import './assets/scss/index.scss';

import { MainPage } from './pages/MainPage';
import { ProfilePage } from './pages/ProfilePage';
import { LoginPage } from './pages/LoginPage';
import { CardsPage } from './pages/CardsPage';

const App = () => {
  return (
    <Routes>
      <Route path={Path.main} element={<MainPage />} />
      <Route path={Path.profile} element={<ProfilePage />} />
      <Route path={Path.login} element={<LoginPage />} />
      <Route path={Path.cards} element={<CardsPage />} />
      <Route path='*' element={<Navigate to={Path.main} replace />} />
    </Routes>
  );
};

export default App;
