import React, { useState, useEffect } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm !== '') setFilteredCountries(countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, countries])

  const returnCountryForDetails = countryName => {
    const country = countries.find(country => country.name === countryName);
    setCountry(country);

    const bordersCodes = country.borders.map(border => border);
    const bordersNames = bordersCodes
      .map(bordersCode => countries.filter(country => country.alpha3Code === bordersCode))
      .flat()
      .map(country => country.name);
    setCountryBorders(bordersNames);
  }

  const filterByRegion = region => {
    if (region === 'All') {
      setFilteredCountries([])
    }
    else {
      setFilteredCountries(countries.filter(country => country.region === region));
    }
  }

  return (
    <Switch>
      <>
        <div className="flex flex-col">
          <Header />
          <Route path="/" exact>
            <section className="flex flex-col bg-very-light-gray dark:bg-very-dark-blue-bg px-8 sm:px-16 py-8">
              <div className="flex flex-col w-full mb-12 sm:flex-row sm:justify-between">
                <SearchBar setSearchTerm={setSearchTerm} />
                <Filter filterByRegion={filterByRegion} />
              </div>
              <CountriesList
                countries={filteredCountries.length > 0 ? filteredCountries : countries}
                returnCountryForDetails={returnCountryForDetails}
              />
            </section>
          </Route>
          <Route path={`/${(country.name) ? country.name.toLowerCase().replace(' ', '-') : ''}`}>
            <CountryDetailsPage
              country={country}
              countryBorders={countryBorders}
              returnCountryForDetails={returnCountryForDetails}
            />
          </Route>
        </div>
      </>
    </Switch>
  );
}

export default App;
