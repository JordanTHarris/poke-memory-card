import { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

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
      <DarkModeSwitch
        className="dark-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        moonColor="#ffcb05"
        sunColor="#003a70"
      />
    </div>
  );
}
export default ThemeButton;
