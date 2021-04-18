import React from 'react';
import { useHistory } from 'react-router-dom';

import Span from './Span';
import Button from './Button';

const CountryDetailsPage = ({country, countryBorders, returnCountryForDetails}) => {
  const history = useHistory();
  const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages} = country;

  console.log(history)
  return (
    <div className="flex flex-col w-screen p-8 sm:px-16 sm:py-24 dark:bg-very-dark-blue-bg dark:text-white">
      <Button text={'Back'} onClick={history.goBack} />
      <div className="flex flex-col sm:flex-row sm:items-center">
        <div className="mb-12 sm:w-1/2 sm:mb-0">
          <img src={flag} alt={name} className="shadow-md" />
        </div>
        <div className="flex flex-col sm:w-1/2 sm:pl-8">
          <div className="flex flex-row mb-8">
            <span className="text-4xl font-bold">{name}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:mb-16">
            <div className="flex flex-col mb-12 sm:w-1/2 sm:mb-0">
              <Span type={'Native Name: '} value={nativeName} />
              <Span type={'Population: '} value={population} />
              <Span type={'Region: '} value={region} />
              <Span type={'Sub Region: '} value={subregion} />
              <Span outerStyle={'none'} type={'Capital: '} value={capital} />
            </div>
            {<div className="flex flex-col mb-12 sm:w-1/2 sm:mb-0">
              <span className="mb-2"><span className="font-semibold">Top Level Domain: </span>{topLevelDomain}</span>
              <span className="mb-2"><span className="font-semibold">Currencies: </span>
                {currencies && currencies.length > 0 ?
                  currencies.map(currency => currency.name)
                  :
                  'None'
                }
              </span>
              <span className="mb-2"><span className="font-semibold">Languages: </span>
                {languages && languages.length > 0 ?
                  languages
                    .map(language => language.name)
                    .join(", ")
                  :
                  'None'
                }
              </span>
            </div>}
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
            <span className="font-semibold mb-4 mr-4 sm:mb-0">Border Countries:</span>
            {countryBorders && countryBorders.length > 0 ? countryBorders.map(border => {
              return (
                <button
                  key={border}
                  className="rounded-md mr-4 mb-4 px-6 py-2 shadow-md dark:bg-dark-blue"
                  onClick={() => {
                    returnCountryForDetails(border);
                    history.push(`/${border.toLowerCase().replace(' ', '-')}`, { from: `/${name.toLowerCase().replace(' ', '-')}`});
                  }}
                >
                  {border}
                </button>
              )
              }) : <span>None</span>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetailsPage;
