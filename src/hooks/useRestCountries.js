import { useState, useEffect } from 'react';

import RestCountries from '../api/RestCountries';

const useShrtcode = () => {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    const item = window.localStorage.getItem('countriesList');

    if (!item || item.length === 0) {
      getCountries();
    }
    else {
      setCountriesList(JSON.parse(item));
    }
  }, []);

  const getCountries = async () => {
      const response = await RestCountries.get('all', {});
      setCountriesList(response.data);
      window.localStorage.setItem('countriesList', JSON.stringify(response.data));
    }

  return [countriesList, getCountries];
}

export default useShrtcode;
