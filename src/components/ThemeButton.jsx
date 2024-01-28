import { useEffect } from 'react';
import DarkModeIcon from '/dark-mode.svg';
import LightModeIcon from '/light-mode.svg';
import useLocalStorage from 'use-local-storage';

function ThemeButton() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [hasSelectedTheme, setHasSelectedTheme] = useLocalStorage('hasSelectedTheme', false);

  useEffect(() => {
    if (hasSelectedTheme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.setAttribute('data-theme', defaultDark ? 'dark' : 'light');
    }
  });

  // Function to toggle between dark and light themes
  function toggleTheme() {
    setHasSelectedTheme(true);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  return (
    <div className="theme-container">
      <button className="theme-button" onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === 'dark' ? DarkModeIcon : LightModeIcon}
          alt="Theme"
        />
      </button>
    </div>
  );
}
export default ThemeButton;
