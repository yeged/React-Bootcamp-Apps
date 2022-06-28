/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState, useMemo } from 'react';
import Button from './Buttons';
import getData from './getData';

const CountryCard = () => {
  const [showList, setShowList] = useState(true);
  const { isLoading, countryList } = getData();

  // Country Card
  const showCountries = useMemo(() => (
    <div className="card-container">
      {countryList.map(({
        name, capital, flag, languages,
      }) => (
        <div key={name} className="card">
          <h3>{name}</h3>
          <h4>{capital}</h4>
          <img src={flag} alt={name} />
          {languages.map((language, index) => (
            <h6 key={index}>{language.name}</h6>
          ))}
        </div>
      ))}
    </div>
  ), [countryList]);

  const showLanguages = useMemo(() => {
    // langName --> [[Array3], [Array1], ...] | join and split ---> ["Pashto", "Uzbek", ...]
    // reduce --> {Pashto:1, Uzbek:2, Turkmen:3, ...}
    const langName = countryList.map(({ languages }) => (
      languages.map((language) => language.name)
    )).join(',').split(',').reduce((obj, lang) => {
      obj[lang] = (obj[lang] || 0) + 1; // obj[lang] : count
      return obj;
    }, {});
    return (
      // --> [["Pashto", 1], ["Uzbek", 2], ...]
      <div className="stats-container">
        {Object.entries(langName).sort((a, b) => b[1] - a[1]) // Object Sort
          .slice(0, 10) // First 10 entries
          .map((value, index) => (
            <div key={index}>
              <h1 style={{ padding: '10px' }}>
                {`${index + 1}) `}
                {value[0]}
                {' '}
                :
                {' '}
                {value[1]}
              </h1>
            </div>
          ))}
      </div>
    );
  }, [countryList]);

  if (isLoading) {
    return (
      <div id="loading" />
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button className="btn" onClick={() => { setShowList(true); }}>Ülke Listesi</Button>
        <Button className="btn" onClick={() => { setShowList(false); }}>Istatistikler</Button>
      </div>
      {showList ? showCountries : showLanguages}
    </div>
  );
};

export default CountryCard;
