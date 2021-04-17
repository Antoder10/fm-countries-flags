import React from 'react';

import { Link } from 'react-router-dom';

import Toggle from './Toggle';

const Header = () => {
  return (
    <header className="flex flex-row px-8 items-center justify-between bg-white dark:bg-dark-blue sm:px-16 py-8 text-very-dark-blue-text shadow-md">
      <Link to="/">
        <span
          className="w-2/3 font-bold text-lg sm:text-2xl dark:text-white"
        >
          Where in the world?
        </span>
      </Link>
      <Toggle />
    </header>
  )
}

export default Header
