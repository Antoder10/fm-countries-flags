import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button
        className="flex items-center justify-center rounded-md w-36 mb-24 px-6 py-2 shadow-lg dark:bg-dark-blue"
        onClick={onClick}
    >
      {`${text === 'Back' ? '⮈ ' : ''}`} {text}
    </button>
  )
}

export default Button;
