import React from 'react';

import { Link } from 'react-router-dom';

const Button = ({text, onClick, linkto = ''}) => {
  return (
    <Link to={linkto} >
      <button
          className="flex items-center justify-center rounded-md w-36 mb-24 px-6 py-2 shadow-lg dark:bg-dark-blue"
          onClick={onClick}
      >
        {`${text === 'Back' ? '⮈ ' : ''}`} {text}
      </button>
    </Link>
  )
}

export default Button;
