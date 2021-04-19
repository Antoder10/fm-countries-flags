import React, {useState} from 'react';

const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const Filter = ({filter}) => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value);
    filter(e.target.id, e.target.value);
  }

  return (
    <select
      name="regions"
      id="regions"
      className="flex items-center justify-left px-8 py-3 rounded-sm dark:bg-dark-blue dark:text-white sm:w-72 cursor-pointer"
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>Filter by Region</option>
      {regions.map(region => <option key={region} value={region}>{region}</option>)}
    </select>
  )
}

export default Filter
