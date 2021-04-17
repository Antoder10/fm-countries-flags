import React from 'react';
import { ThemeContext } from './themeContext';

import Moon from '../images/half-moon.svg';
import Sun from '../images/sun.svg';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div
      className="flex items-center sm:ml-auto cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className={`mr-2 text-xs font-semibold sm:text-base ${theme === 'dark' ? "text-white" : "text-black"}`}>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'} On</span>
      <img src={theme === 'dark' ? Moon : Sun} alt="toggle icon" className="w-4 h-4 sm:w-8 sm:h-8"/>
    </div>
  )
}

export default Toggle;