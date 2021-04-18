import React from 'react';

import LazyLoad from 'react-lazyload';

import CountryBox from './CountryBox';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const CountriesList = ({countries, returnCountryForDetails}) => {
  return (
    <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-4 sm:gap-12">
      {countries.map(country => {
        return (
          <LazyLoad
            key={country.name}
            placeholder={
              <Loader
                type="ThreeDots"
                color="#2B3945"
                width={150}
                height={150}
              />
            }
          >
            <CountryBox key={country.name} country={country} returnCountryForDetails={returnCountryForDetails} />
          </LazyLoad>
        )
      })}
    </div>
  )
}

export default CountriesList
