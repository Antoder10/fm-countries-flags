import React, { useState } from 'react';
import  { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import CountriesList from './components/CountriesList';

import CountryDetailsPage from './components/CountryDetailsPage';

import useRestCountries from './hooks/useRestCountries';

const App = () => {
  /* eslint-disable no-unused-vars */
  const [countries, setCountries] = useRestCountries();
  /* eslint-disable no-unused-vars */
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [countryBorders, setCountryBorders] = useState([]);

  const filter = (term) => {
    if (term === 'All') {
      setFilteredCountries([])
    }
    else if (term === 'Africa' || 'Americas' || 'Asia' || 'Europe' || 'Oceania') {
      setFilteredCountries(countries.filter(country => country.region === term));
    }
    else if (term !== '') {
      setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(term.toLowerCase())))
    };
  }

  const replaceChars = name => {
    return name.toLowerCase().replace(/[\s()]+/g, '-').replace(/-*$/g, "").replace(/å/gi, 'a');
  }

  const returnCountryForDetails = countryName => {
    if (countryName) {
      const country = countries.find(country => country.name === countryName);
      setCountry(country);

      const bordersNames = country.borders
        .map(border => border)
        .map(bordersCode => countries.filter(country => country.alpha3Code === bordersCode))
        .flat()
        .map(country => country.name);
      setCountryBorders(bordersNames);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Switch>
        <Route path="/" exact>
          <section className="flex flex-col min-h-screen bg-very-light-gray dark:bg-very-dark-blue-bg px-8 sm:px-16 py-8">
            <div className="flex flex-col w-full mb-12 sm:flex-row sm:justify-between">
              <SearchBar filter={filter} />
              <Filter filter={filter} />
            </div>
            <CountriesList
              countries={filteredCountries.length > 0 ? filteredCountries : countries}
              returnCountryForDetails={returnCountryForDetails}
              replaceChars={replaceChars}
            />
          </section>
        </Route>
        <Route path={`/:${country ? replaceChars(country.name) : ''}`}>
          <CountryDetailsPage
            country={country}
            countryBorders={countryBorders}
            returnCountryForDetails={returnCountryForDetails}
            replaceChars={replaceChars}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
