import React from 'react';
import { useHistory } from 'react-router-dom';

import Span from './Span';

const CountryBox = ({country, returnCountryForDetails}) => {
  const history = useHistory();
  const {flag, name, population, region, capital} = country;

  return (
    <div
      className="flex flex-col bg-white dark:bg-dark-blue dark:text-white shadow-md overflow-hidden"
      onClick={() => {
        returnCountryForDetails(name);
        history.push(`/${name.toLowerCase().replace(' ', '-')}`, { from: "/"});
      }}
    >
      <img src={flag} alt={name} className="object-cover max-h-40" />
      <div className="flex flex-col px-4 py-8">
        <span className="font-bold text-xl mb-4">{name}</span>
        <Span outerStyle={'none'} type={'Population: '} value={`${population.toLocaleString()}`} />
        <Span outerStyle={'none'} type={'Region: '} value={region} />
        <Span outerStyle={'none'} type={'Capital: '} value={capital} />
      </div>
    </div>
  )
}

export default CountryBox
