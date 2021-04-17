import React from 'react';

import CountryBox from './CountryBox';

const CountriesList = ({countries, returnCountryForDetails}) => {
  return (
    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-4 sm:gap-12">
      {countries.map(country => <CountryBox key={country.name} country={country} returnCountryForDetails={returnCountryForDetails} /> )}
    </div>
  )
}

export default CountriesList
