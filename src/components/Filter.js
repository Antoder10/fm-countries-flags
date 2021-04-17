import React from 'react';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Filter = ({filterByRegion}) => {
  return (
    <select
      name="regions"
      id="regions"
      className="flex items-center justify-left px-8 py-3 rounded-sm dark:bg-dark-blue dark:text-white sm:w-72 cursor-pointer"
      onChange={e => filterByRegion(e.target.value)}
    >
      <option value="" disabled>Filter by Region</option>
      {regions.map(region => <option key={region} value={region}>{region}</option>)}
    </select>

  )
}

export default Filter
