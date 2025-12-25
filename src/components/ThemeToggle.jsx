import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}