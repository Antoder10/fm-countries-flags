import React from 'react';
import { useHistory } from 'react-router-dom';

import Flag from './Flag';
import DetailsSection from './DetailsSection';
import Span from './Span';
import Button from './Button';

const CountryDetailsPage = ({country, countryBorders, returnCountryForDetails}) => {
  const history = useHistory();
  const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages} = country;

  const replaceChars = name => {
    return name.toLowerCase().replace(/[\s()]+/g, '-').replace(/-*$/g, "");
  }

  return (
    <div className="flex flex-col w-screen p-8 sm:px-16 sm:py-24 dark:bg-very-dark-blue-bg dark:text-white">
      <Button text={'Back'} onClick={history.goBack} />
      <div className="flex flex-col sm:flex-row sm:items-center">
        <Flag flag={flag} name={name} />
        <div className="flex flex-col sm:w-1/2 sm:pl-8">
          <div className="flex flex-row mb-8">
            <span className="text-4xl font-bold">{name}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:mb-16">
            <DetailsSection>
              <Span type={'Native Name: '} value={nativeName} />
              <Span type={'Population: '} value={population.toLocaleString()} />
              <Span type={'Region: '} value={region} />
              <Span type={'Sub Region: '} value={subregion} />
              <Span outerStyle={'none'} type={'Capital: '} value={capital} />
            </DetailsSection>
            <DetailsSection>
              <Span type={'Top Level Domain: '} value={topLevelDomain} />
              {currencies && currencies.length > 0 ?
                currencies.map(currency => <Span key={currency.name} type={'Currencies: '} value={currency.name} />)
                :
                <Span type={'Currencies: '} value={'None'} />
              }
              <Span
                type={'Languages: '}
                value={languages && languages.length > 0 ?
                  languages
                    .map(language => language.name)
                    .join(", ")
                  :
                  'None'}
              />
            </DetailsSection>
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
                    history.push(`/${replaceChars(border)}`, { from: `/${replaceChars(name)}`});
                  }}
                  linkto={`/${replaceChars(border)}`}
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
