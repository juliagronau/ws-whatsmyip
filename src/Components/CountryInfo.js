import { useEffect, useState } from "react";
import axios from "axios";

const CountryInfo = ({ userCountry }) => {
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      await axios
        .get(`https://restcountries.com/v3.1/alpha/${userCountry}`)
        .then((response) => setCountryInfo(response.data[0]))
        .catch((error) => console.log(error));
    };
    fetchCountryInfo();
  }, [userCountry]);
  return (
    <div>
      {countryInfo ? (
        <div>
          <p>
            The country you are located in is{" "}
            {countryInfo.altSpellings[1]}.
          </p>
          <p>
            {countryInfo.population
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
            people live here.
          </p>
          <p>
            The capital of {countryInfo.altSpellings[1]} is{" "}
            {countryInfo.capital[0]}.
          </p>
          <p>
            People are driving on the {countryInfo.car.side} side of
            the street.
          </p>
          <p>
            In Sweden, {countryInfo.altSpellings[1]} is called{" "}
            {countryInfo.translations.swe.official}.
          </p>
          <p>The flag looks like this:</p>
          <img
            src={countryInfo.flags.png}
            alt={`flag of ${countryInfo.altSpellings[1]}`}
          />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default CountryInfo;
