/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import axios from 'axios';

const getData = () => {
  const [countryList, setCountryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((response) => {
      // handle success
        setCountryList(response.data);
      })
      .catch((error) => {
      // handle error
        console.log(error);
      })
      .then(() => {
      // always executed
        setIsLoading(false);
      });
  }, []);

  return { isLoading, countryList };
};

export default getData;
