import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { RouterLink } from '../RouterLink';
type AvailableThemes = 'dark' | 'light';
export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const savedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return savedTheme;
  });
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  localStorage.setItem('theme', theme);
  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Ir para a página inicial"
        title="Ir para a página inicial"
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </RouterLink>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={(e) => handleThemeChange(e)}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
