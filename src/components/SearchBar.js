import React, { useState } from 'react';

const SearchBar = ({setSearchTerm}) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchTerm(term);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="🔍 Search for a country..."
        className="w-full px-4 py-3 rounded-sm mb-12 font-semibold sm:mb-0 sm:w-96 dark:bg-dark-blue dark:text-white"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
