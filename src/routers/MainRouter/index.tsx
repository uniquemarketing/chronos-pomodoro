import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/home';
import { AboutPomodoro } from '../../pages/AboutPomodoro';
import { History } from '../../pages/history';
import { useLocation } from 'react-router';
import { useEffect } from 'react';
import { Settings } from '../../pages/Settings';

function ScroolToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history/" element={<History />} />
        <Route path="/settings/" element={<Settings />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
      </Routes>
      <ScroolToTop />
    </BrowserRouter>
  );
}
