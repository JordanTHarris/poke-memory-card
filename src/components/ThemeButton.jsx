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
      // Set theme based on local storage
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      // Set theme based on the user's preference
      document.documentElement.setAttribute('data-theme', defaultDark ? 'dark' : 'light');
    }
  });

  function toggleTheme() {
    setHasSelectedTheme(true);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
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
